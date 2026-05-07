const JUDGE0_API = "https://ce.judge0.com";

const LANGUAGE_IDS = {
  javascript: 93,
  python: 71,
  java: 62,
};

export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_IDS[language];
    if (!languageId) {
      return { success: false, error: `Unsupported language: ${language}` };
    }

    let processedCode = code;
    if (language === "java") {
      processedCode = code.replace(/class\s+Solution/g, "class Main");
    }

    const submitRes = await fetch(`${JUDGE0_API}/submissions?base64_encoded=false&wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: processedCode, 
      }),
    });

    if (!submitRes.ok) {
      return { success: false, error: `HTTP ${submitRes.status}` };
    }

    const result = await submitRes.json();
    const stderr = result.stderr || result.compile_output || "";
    const stdout = result.stdout || "";

    if (stderr) {
      return { success: false, output: stdout, error: stderr };
    }

    return { success: true, output: stdout || "No output" };

  } catch (error) {
    return { success: false, error: `Failed to execute: ${error.message}` };
  }
}
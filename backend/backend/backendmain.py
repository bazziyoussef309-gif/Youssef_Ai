
from fastapi import FastAPI

app = FastAPI(title="YOUSSEF AI")

@app.get("/")
def home():
    return {
        "name": "YOUSSEF AI",
        "status": "Backend Online"
    }

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/chat")
def chat(data: dict):
    message = data.get("message", "")

    if not isinstance(message, str) or not message.strip():
        return {"error": "Message is required"}

    return {
        "reply": "Your AI engine is being prepared!",
        "received": message
    }

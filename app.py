# chatbot.py
def get_response(user_input):
    # Simple chatbot logic (you can replace this with more advanced AI)
    responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bunch of code, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a nice day!"
    }
    return responses.get(user_input.lower(), "I didn't understand that. Can you try rephrasing?")

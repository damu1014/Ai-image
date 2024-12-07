# app.py
from flask import Flask, request, jsonify
from chatbot import get_response

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    bot_reply = get_response(user_message)
    return jsonify(reply=bot_reply)

if __name__ == '__main__':
    app.run(debug=True)

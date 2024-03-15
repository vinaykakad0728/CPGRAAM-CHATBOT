from flask import Flask, render_template
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello() -> str:
    return render_template("navbar.html")

@app.route("/<username>")
def greet(username):
    return f'Hello {username}'

if __name__ == "__main__":
    app.run()
   
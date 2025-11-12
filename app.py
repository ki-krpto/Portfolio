from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('layout.html')

@app.route("/articles.html")
def articles():
    return render_template("articles.html")
    
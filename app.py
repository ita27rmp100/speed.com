from flask import Flask , render_template , url_for ,jsonify
import speedtest , time

app = Flask(__name__)

def speedTest() :
    try :
        l = speedtest.Speedtest()
        download = f'{l.download()/1048576:03.2f} Mbps'
        print("download : ",download)
        upload = f'{l.upload()/1048576:03.2f} Mbps'
        print("upload : ",upload)
        ping = f'{l.results.ping:03.2f} Mbps'
        print("ping : ",ping)
    except speedtest.ConfigRetrievalError :
        print("there is  no Internet")
        download = "N/A"
        upload = "N/A"
        ping = "N/A"
    return download , upload , ping

@app.route('/')

def index() :
    download, upload, ping = speedTest()
    return render_template('index.html',title="Speed",download=download,upload=upload,ping=ping)

# Run the application
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')

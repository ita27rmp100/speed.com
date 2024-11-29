import speedtest 
try :
    l = speedtest.Speedtest()
    download = f'{l.download()/1048576:03.2f} Mbps'
    print("download : ",download)
    upload = f'{l.upload()/1048576:03.2f} Mbps'
    print("upload : ",upload)
    ping = f'{l.results.ping:03.2f} Mbps'
    print("ping : ",ping)
except speedtest.ConfigRetrievalError :
    print("Internet speed","there is  no Internet")

import speedtest 
try :
    l = speedtest.Speedtest()
    download = f'{l.download()/1048576:03.2f} Mbps'
    upload = f'{l.upload()/1048576:03.2f} Mbps'
    ping = f'{l.results.ping:03.2f} Mbps'
except speedtest.ConfigRetrievalError :
    print("there is  no Internet")

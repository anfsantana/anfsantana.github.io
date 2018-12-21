class Tweeter {
    constructor(props) {
        this.settings = {
            "url": "https://api.twitter.com/1.1/search/tweets.json",
            "method": "GET",
            "headers": {
                "Authorization": "OAuth " +
                    "oauth_consumer_key=\"dSaXs1OMjdiNRZaZGV8IqxFgB\"," +
                    "oauth_token=\"222773780-7ZbtQ7OFBXmJiTBYSleAZfNm5T6CnmDP5PBeIm9z\"," +
                    "oauth_signature_method=\"HMAC-SHA1\"," +
                    "oauth_timestamp=\"1545089944\"," +
                    "oauth_nonce=\"KrUKa6XJ1Bd\"," +
                    "oauth_version=\"1.0\"," +
                    "oauth_signature=\"Sq2KrUHsT7MZXAW3O%2FW4GANvcwM%3D\"",
            }
        };
    }

    searchTweets(q, resultType = 'popular', lang = 'pt') {
        console.log(this.settings);
        this.settings.data = {
            q: q,
            result_type: resultType,
            lang: lang
        };

        $.ajax(this.settings, function (a,b,c,d) {
            console.log(a,b,c,d);
        }).done(function (response) {
            console.log(response);
        })
    }
}

let t = new Tweeter();
//t.searchTweets('Salvador');
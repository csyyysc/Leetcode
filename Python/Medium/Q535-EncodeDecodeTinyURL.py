class Codec:
    def __init__(self):
        self.prefix = ""

    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        longUrl = longUrl.split("://")
        self.prefix = longUrl[0]
        longUrl = longUrl[1].split(" ")
        return " ".join(longUrl)

    def decode(self, shortUrl: str) -> str:
        print(shortUrl)
        """Decodes a shortened URL to its original URL.
        """
        return self.prefix + "://" + "".join(shortUrl)

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
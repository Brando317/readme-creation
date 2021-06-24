const book =
{
title: "TheKillArtist",
author: "Daniel Silva",
length: "FourHours",
read: "yes",
readCount: "once"}


book.info = function (){
    console.log(`${this.author} ${this.title} ${this.read} ${this.readCount}`)
}
book.info()
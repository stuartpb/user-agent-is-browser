user-agent-is-a-browser
=======================

JS function to determine if a string is the User-Agent for a browser (even if it doesn't start with `Mozilla/`!)

## What is this I don't even

This is a function that determines whether the string you passed in to it matches the whitelist rules of what we expect a browser's UA to look like.

## It only determines if the User-Agent is *a* browser? Not *which* browser it is? What's the point of that?

Ah, because, sonny Jim, ***not all HTTP consumers are browsers!*** There's crawlers, robots, libraries, static-retrieval binaries... really, just take a look at [this list of HTTP clients](http://www.useragentstring.com/pages/useragentstring.php) for a wide sampling of many User-Agents there are that aren't, strictly speaking, browsers.

If you want information on *what* browser is requesting the site via the User-Agent, there are several libraries to do that - just do an NPM search for "useragent".

## How does it determine if the User-Agent is a browser?

Well, it starts by checking to see if the string starts with 'Mozilla/'. Ever since Netscape was released and Internet Explorer copied its UA, 99% of browsers that want to signify that they're a browser without causing compatibility issues will start their User-Agent with "Mozilla/": this check is enough to catch the latest versions of all the major browsers (IE, Firefox, Chrome, Safari, and even Opera).

However, *some* browsers, out of some misguided sense of "integrity", or a desire to differentiate themselves and their compatibility, or for whatever reason, chose not to copy the Mozilla prefix (until its move to the Chromium/Blink code base, Opera was probably the highest-profile browser to do this and subsequently suffer for it). Going forward, anybody who's serious about making an HTML5-world-ready browser will have to start their UA with "Mozilla/5.0", but for the long-tail of esoteric experimental browsers (such as Lynx and w3m, which aim to making web browsing in terminals), this function uses a white list based on http://www.useragentstring.com/pages/Browserlist/ to recognize these agents as browsers as well.

## Does it exclude User-Agents that impersonate browsers, like crawlers?

No. If a crawler wants to impersonate a browser by prefixing *its* User-Agent with "Mozilla/", this function will let it.

## But *why?*

[meta.sh](http://meta.sh) uses this for its base paths, to determine whether to serve a requestor the HTML page for a script (for browsers), or the plain text of the script (for curl/wget/etc). The world of looking up shell scripts is probably one that is most likely to encounter esoteric browser agents, so a simple "Mozilla/" check isn't good enough.

## Is there any browser on that list that ISN'T included in the tests?

No... well, except for [Enigma Browser](http://ejohn.org/blog/attack-of-the-enigma-browser/).

# InMail Engine — Website

Static marketing site for InMail Engine, imported from the Claude Design project
"LinkedIn Warm Introductions Calculator".

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Why Us? | `why-us.html` |
| Case Studies | `case-studies.html` |
| Case Study: Go-CyberSide | `case-go-cyberside.html` |
| Case Study: Voice.ai | `case-voiceai.html` |
| Case Study: BrineIQ | `case-brineiq.html` |
| ROI Calculator | `calculator.html` |
| Privacy Policy | `privacy-policy.html` |
| Terms of Service | `terms-of-service.html` |
| Thank You (post-booking) | `thank-you.html` |

Shared styles and behaviour live in `assets/site.css` and `assets/site.js`.
Case-study screenshots (BrineIQ LinkedIn threads, Go-CyberSide Slack/tweet)
live in `assets/case-studies/`.

## Running locally

No build step — it's plain HTML/CSS/JS. Open `index.html` directly, or serve the
folder:

```sh
python3 -m http.server 8000
```

then visit http://localhost:8000.

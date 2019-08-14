# Il poeta virtuale
![GitHub](https://img.shields.io/github/license/diessetechnology/il-poeta-virtuale-pwa?label=Licenza&style=plastic)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7a0d27bd-433e-4f28-9aa0-8daa3355241c/deploy-status)](https://app.netlify.com/sites/ilpoetavirtuale/deploys)
![Website](https://img.shields.io/website/https/ilpoetavirtuale.netlify.com?down_message=Il%20poeta%20%C3%A8%20acciaccato&label=Salute%20del%20poeta%20virtuale%20%28il%20sito%20%C3%A8%20online%3F%29&up_message=Il%20poeta%20%C3%A8%20in%20salute)
[![CodeFactor](https://www.codefactor.io/repository/github/diessetechnology/il-poeta-virtuale-pwa/badge)](https://www.codefactor.io/repository/github/diessetechnology/il-poeta-virtuale-pwa)
[![Maintainability](https://api.codeclimate.com/v1/badges/75edddb3a3803cc34def/maintainability)](https://codeclimate.com/github/diessetechnology/il-poeta-virtuale-pwa/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9bce9fc0efb24a7f855eb3da46e55751)](https://www.codacy.com/app/diessetechnology/il-poeta-virtuale-pwa?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=diessetechnology/il-poeta-virtuale-pwa&amp;utm_campaign=Badge_Grade)
[![Depfu](https://badges.depfu.com/badges/8f20735ab92f837de92bbb2b2b0b193c/overview.svg)](https://depfu.com/github/diessetechnology/il-poeta-virtuale-pwa?project_id=8758)
[![Depfu](https://badges.depfu.com/badges/8f20735ab92f837de92bbb2b2b0b193c/count.svg)](https://depfu.com/github/diessetechnology/il-poeta-virtuale-pwa?project_id=8758)
[![DepShield Badge](https://depshield.sonatype.org/badges/diessetechnology/il-poeta-virtuale-pwa/depshield.svg)](https://depshield.github.io)


Dagli il titolo di una poesia...e questo programma te la reciterà strofa per strofa!

Questo programma è un esperimento di progressive web app scritto in due giorni,



Lo stack:

- React per il frontend (no,niente redux)
- Semantic UI per il css (A mio parere uno dei migliori framework)
- speech-syntesis per far parlare la PWA
- webfontloader per caricare il font usato nella poesia da Google Font (Il font è Parisienne)
- Netlify,per l'hosting della progressive web app



Questa applicazione per ora è disponibile solo in Italiano,perchè le poesie nel database sono in lingua italiana,e io non ho intenzione di tradurla in inglese poichè ho progetti più grandi da continuare...

Ma il codice è sotto licenza MIT,quindi se qualcuno ha voglia di migliorare il programma,aggiungere poesie e magari tradurre questa PWA...è ben accetto e sarà incluso nei ringraziamenti...Io cercherò di aggiornarlo quando possibile...



Per aggiungere delle poesie,basta modificare il file poesie.json all'interno di src

```json
{
  "poesie": [
    {
      "titolo": "Mattina",
      "autore": "Giuseppe Ungaretti",
      "strofe": [
        "M'illumino d'immenso"
      ]
    },
      ...
      ...
  ]
}
```

aggiungendo una poesia in questo formato

```
{
  "titolo": "Titolo della poesia",
  "autore": "Autore della poesia",
  "strofe":["Strofa 1","Strofa 2","ecc","ecc"]
}
```

Il punteggio su Lighthouse è quasi perfetto,e il punteggio PWA è a 100.

Godetevi il vostro Poeta Virtuale!

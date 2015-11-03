# Natural file and folder name generator
Auto generates random file and folder names that look perfectly natural.

### Installation
```js
npm install natural-filename-generator
```

### Why?
For a recent project I had to auto generate a lot of file and folder names only they could not look auto generated!

Auto generated strings typically look sequential and are easy to spot e.g

file01.jpg  
file01.jpg  
file03.jpg  

This module builds strings from:
 
* 4000 common English words
* 4000 celebrity names (dead and living)
* Names of countries and capitals
* Popular topics
* Random numbers (at random lengths)
* Dates (in various formats)

The generator uses a natural distribution curve following [Zipf's law](https://en.wikipedia.org/wiki/Zipf%27s_law)

### Example

```js
var NaturalNameGenerator = require('natural-filename-generator');

var g = new NaturalNameGenerator();
    
for(var i = 0; i < 100; i++){
    var name = g.generate('jpg');
    console.log(name);
}
```
I bet that neither a machine or a human can tell that below names are 100% machine generated:

photos_donate_2015_sri-lanka_7048829_will-i-am.jpg  
design_suriname_2015.jpg  
expertise_2015_conakry_sao-tome-and-principe_gender.jpg  
money-popup-crack.jpg  
fraction_health_sao-tome-and-principe_helen-reddy_045706_sm_151104_ulan-bator.jpg  
moon_energy_2015_66322131_booker-t-washington.jpg  
large_news.jpg  
nauru-6015-small-fighter-left-gender.jpg  
tv-xs.jpg  
gustavia-entertainment-productivity.jpg  
vintage_bahrain_saipan.jpg  
indonesia-quito-nancy-grace-left-glad.jpg  
legislation-grain.jpg  
large_energy_dry_philippines.jpg  
footer-243-ecuador.jpg  
kyrgyzstan-04795009-picabo-street-guide-style.jpg  
india-data-large-gk-chesterton-mother.jpg  
footer-barbados-celine-dion.jpg  
socio_respectively_366996.jpg  
socio_ahead_531437_sweden_popup.jpg  
trinidad_samuel-morse_bring.jpg  
tv_nepal_390380_george-foreman.jpg  
sidebar_socio_culture_guinea-bissau.jpg  
xl_david-blaine_component_tanzania_books.jpg  
navy-suitable-andres-segovia.jpg  
2015-11-04_data_burundi.jpg  
penalty_port-of-spain_left_press.jpg  
marlon-wayans_26928925_read.jpg  
meditation.jpg  
2015-11-04-stefanie-powers-comoros-energy-shirt.jpg  
financial-software-footer-763.jpg  
gambia-math-nicole-bass.jpg  
nassau_tyrone-power_mobile_attribute.jpg  
mauritania-books-540800-descend-richard-fleischer.jpg  
south-africa_footer_jamie-lynn-spears_space_sm.jpg  
footer_cambodia_jacqueline-susann_business_151104.jpg  
alex-karras_xl.jpg  
xl-vintage-header.jpg  
debate_8680823_norway_deputy.jpg  
pyongyang_15_world_burt-lancaster.jpg  
9946-ethics-small.jpg  
poland-vintage-immune.jpg  
law_sm_raymond-chandler_finland.jpg  
often_navy_solomon-islands_ernie-kovacs.jpg  
iceland-medium-mary-pickford-74534-navy.jpg  
melvin-van-peebles-cte-divoire-jobs.jpg  
faq_footer.jpg  
suva_small_mao-tse-tung_math.jpg  
guatemala-port-moresby-drama-robert-preston.jpg  
science_small.jpg  
tony-hawk-mining-montenegro.jpg  
151104_music_bette-davis_nepal.jpg  
2015-11-04_world_paraguay_constitute.jpg  
dominica-legislation.jpg  
vintage-iraq-the-valley-tale-ogden-nash.jpg  
military_samoa_boom_porto-novo_2015_joyce-dewitt.jpg  
xl_san-marino_money_eddie-cleanhead-vinson.jpg  
veronica-hamel_military_known_kigali.jpg  


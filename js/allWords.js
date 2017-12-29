var allWords = [
{ eng: "the", pol: "ten, ta, to"},
{ eng: "name", pol: "nazwa, nazwisko"},
{ eng: "of", pol: "z, o, od"},
{ eng: "very", pol: "bardzo"},
{ eng: "to", pol: "do, na, po, dla, żeby"},
{ eng: "through", pol: "przez"},
{ eng: "and", pol: "i"},
{ eng: "just", pol: "tylko, właśnie"},
{ eng: "a", pol: "stawiamy przed spółgłoską"},
{ eng: "form", pol: "forma, tworzyć"},
{ eng: "in", pol: "w"},
{ eng: "sentence", pol: "zdanie"},
{ eng: "is", pol: "jest"},
{ eng: "great", pol: "świetnie"},
{ eng: "it", pol: "to"},
{ eng: "think", pol: "myśleć, uważać"},
{ eng: "you", pol: "ty"},
{ eng: "say", pol: "mówić, powiedzieć"},
{ eng: "that", pol: "to, że, ten"},
{ eng: "help", pol: "pomoc, pomagać"},
{ eng: "he", pol: "on"},
{ eng: "low", pol: "niski"},
{ eng: "was", pol: "był, była"},
{ eng: "line", pol: "linia, rząd"},
{ eng: "for", pol: "dla, do, po"},
{ eng: "differ", pol: "różnić się"},
{ eng: "on", pol: "na"},
{ eng: "turn", pol: "skręcić, zakręt"},
{ eng: "are", pol: "są, jesteś"},
{ eng: "cause", pol: "przyczyna, powód"},
{ eng: "with", pol: "z"},
{ eng: "much", pol: "dużo"},
{ eng: "as", pol: "kiedy, gdy, ponieważ"},
{ eng: "mean", pol: "znaczyć, złośliwy"},
{ eng: "I", pol: "ja"},
{ eng: "before", pol: "przed"},
{ eng: "his", pol: "jego"},
{ eng: "move", pol: "ruszać, ruch"},
{ eng: "they", pol: "oni"},
{ eng: "right", pol: "prawy, dobry, poprawny"},
{ eng: "be", pol: "być"},
{ eng: "boy", pol: "chłopiec"},
{ eng: "at", pol: "przy, w, o, na"},
{ eng: "old", pol: "stary"},
{ eng: "one", pol: "jeden"},
{ eng: "too", pol: "również, za (za duży)"},
{ eng: "have", pol: "mieć"},
{ eng: "same", pol: "taki sam, ten sam"},
{ eng: "this", pol: "ten, ta"},
{ eng: "tell", pol: "powiedzieć"},
{ eng: "from", pol: "od, z"},
{ eng: "does", pol: "robić"},
{ eng: "or", pol: "lub"},
{ eng: "set", pol: "komplet, grupa"},
{ eng: "had", pol: "miał, mieliśmy"},
{ eng: "three", pol: "trzy"},
{ eng: "by", pol: "przez"},
{ eng: "want", pol: "chcieć"},
{ eng: "hot", pol: "gorący"},
{ eng: "air", pol: "powietrze"},
{ eng: "word", pol: "słowo"},
{ eng: "well", pol: "cóż, dobrze"},
{ eng: "but", pol: "ale"},
{ eng: "also", pol: "także"},
{ eng: "what", pol: "co"},
{ eng: "play", pol: "grać"},
{ eng: "some", pol: "kilka, niektóre"},
{ eng: "small", pol: "małe"},
{ eng: "we", pol: "my"},
{ eng: "end", pol: "koniec, kończyć"},
{ eng: "can", pol: "umieć, potrafić"},
{ eng: "put", pol: "położyć"},
{ eng: "out", pol: "na zewnątrz"},
{ eng: "home", pol: "dom"},
{ eng: "other", pol: "inne"},
{ eng: "read", pol: "czytać"},
{ eng: "were", pol: "byl, byłeś"},
{ eng: "hand", pol: "dłoń"},
{ eng: "all", pol: "wszystko"},
{ eng: "port", pol: "port"},
{ eng: "there", pol: "tam"},
{ eng: "large", pol: "olbrzymi"},
{ eng: "when", pol: "kiedy, gdy"},
{ eng: "spell", pol: "zaklęcie, literować"},
{ eng: "up", pol: "na"},
{ eng: "add", pol: "dodać"},
{ eng: "use", pol: "użyć"},
{ eng: "even", pol: "nawet, równy"},
{ eng: "your", pol: "twój"},
{ eng: "land", pol: "ziemia, lądować"},
{ eng: "how", pol: "jak"},
{ eng: "here", pol: "tutaj"},
{ eng: "said", pol: "powiedział"},
{ eng: "must", pol: "musieć"},
{ eng: "an", pol: "(stawiamy pred samogłoską lub niemym h)"},
{ eng: "big", pol: "duży"},
{ eng: "each", pol: "każdy"},
{ eng: "high", pol: "wysoki, wysoko"},
{ eng: "she", pol: "ona"},
{ eng: "such", pol: "taki"},
{ eng: "which", pol: "który"},
{ eng: "follow", pol: "stosować się do, iść za, śledzić"},
{ eng: "do", pol: "robić"},
{ eng: "act", pol: "działać, ustawa"},
{ eng: "their", pol: "ich"},
{ eng: "why", pol: "czemu"},
{ eng: "time", pol: "czas"},
{ eng: "ask", pol: "pytać"},
{ eng: "if", pol: "jeśli"},
{ eng: "men", pol: "mężczyzna"},
{ eng: "will", pol: "będzie"},
{ eng: "change", pol: "zmiana, zmieniać"},
{ eng: "way", pol: "sposób, droga"},
{ eng: "went", pol: "poszedł"},
{ eng: "about", pol: "o, około"},
{ eng: "light", pol: "śwatło, jasny, lekki, zapalać"},
{ eng: "many", pol: "wiele, dużo"},
{ eng: "kind", pol: "rodzaj"},
{ eng: "then", pol: "wtedy"},
{ eng: "off", pol: "poza, od"},
{ eng: "them", pol: "oni"},
{ eng: "need", pol: "potrzeba, potrzebować"},
{ eng: "write", pol: "pisać"},
{ eng: "house", pol: "dom"},
{ eng: "would", pol: "zrobiłbym"},
{ eng: "picture", pol: "obraz, wobrażać"},
{ eng: "like", pol: "lubić"},
{ eng: "try", pol: "próbować"},
{ eng: "so", pol: "więc, taki"},
{ eng: "us", pol: "my, nas"},
{ eng: "these", pol: "te"},
{ eng: "again", pol: "znowu"},
{ eng: "her", pol: "jej"},
{ eng: "animal", pol: "zwierzę"},
{ eng: "long", pol: "długi"},
{ eng: "point", pol: "wskazywać, punkt"},
{ eng: "make", pol: "robić"},
{ eng: "mother", pol: "mama"},
{ eng: "thing", pol: "rzecz, coś"},
{ eng: "world", pol: "świat"},
{ eng: "see", pol: "widzieć"},
{ eng: "near", pol: "blisko, obok"},
{ eng: "him", pol: "jemu"},
{ eng: "build", pol: "budować"},
{ eng: "two", pol: "dwa"},
{ eng: "self", pol: "swoje, sobie, ja"},
{ eng: "has", pol: "mieć"},
{ eng: "earth", pol: "Ziemia"},
{ eng: "look", pol: "patrzeć, wyglądać"},
{ eng: "father", pol: "ojciec"},
{ eng: "more", pol: "więcej"},
{ eng: "head", pol: "głowa, główny"},
{ eng: "day", pol: "dzień"},
{ eng: "stand", pol: "stać, stoisko"},
{ eng: "could", pol: "móc"},
{ eng: "own", pol: "posiadać, własny"},
{ eng: "go", pol: "iść"},
{ eng: "page", pol: "strona"},
{ eng: "come", pol: "przychodzić, przyjeżdżać"},
{ eng: "should", pol: "powinien"},
{ eng: "did", pol: "robił"},
{ eng: "country", pol: "państwo, wieś"},
{ eng: "number", pol: "liczba, numer, wiele"},
{ eng: "found", pol: "znalezione"},
{ eng: "sound", pol: "dźwięk, brzmieć"},
{ eng: "answer", pol: "odpowiadać"},
{ eng: "no", pol: "nie, żadnych"},
{ eng: "school", pol: "szkoła"},
{ eng: "most", pol: "najwięcej"},
{ eng: "grow", pol: "rosnąć"},
{ eng: "people", pol: "ludzie"},
{ eng: "study", pol: "studiować, uczyć się"},
{ eng: "my", pol: "moje"},
{ eng: "still", pol: "ciągle"},
{ eng: "over", pol: "nad, przez"},
{ eng: "learn", pol: "uczyć się"},
{ eng: "know", pol: "wiedzieć, znać"},
{ eng: "plant", pol: "roślina, fabryka, sadzić"},
{ eng: "water", pol: "woda, podlewać"},
{ eng: "cover", pol: "okładka, przykrywać"},
{ eng: "than", pol: "niż"},
{ eng: "food", pol: "jedzenia, pokarm"},
{ eng: "call", pol: "dzwonić, nazywać, rozmowa telefoniczna"},
{ eng: "sun", pol: "słońce"},
{ eng: "first", pol: "pierwszy"},
{ eng: "four", pol: "cztery"},
{ eng: "who", pol: "ktom który"},
{ eng: "between", pol: "pomiędzy"},
{ eng: "may", pol: "móc"},
{ eng: "state", pol: "stan, państwo, oświadczać"},
{ eng: "down", pol: "w dół"},
{ eng: "keep", pol: "trzymać, zachowywać coś"},
{ eng: "side", pol: "strona"},
{ eng: "eye", pol: "oko"},
{ eng: "been", pol: "być"},
{ eng: "never", pol: "nigdy"},
{ eng: "now", pol: "teraz"},
{ eng: "last", pol: "ostatni"},
{ eng: "find", pol: "znaleźć"},
{ eng: "let", pol: "pozwolić, wynajmować"},
{ eng: "any", pol: "jakikolwiek, jakieś, żadne"},
{ eng: "thought", pol: "myśl"},
{ eng: "new", pol: "nowy"},
{ eng: "city", pol: "miasto"},
{ eng: "work", pol: "praca, pracować"},
{ eng: "tree", pol: "drzewo"},
{ eng: "part", pol: "część"},
{ eng: "cross", pol: "krzyż, przechodzić przez"},
{ eng: "take", pol: "wziąć"},
{ eng: "farm", pol: "gospodarstwo, uprawiać"},
{ eng: "get", pol: "dostać"},
{ eng: "hard", pol: "twardy, trudny"},
{ eng: "place", pol: "miejsce"},
{ eng: "start", pol: "zaczynać"},
{ eng: "made", pol: "robić"},
{ eng: "might", pol: "móc"},
{ eng: "live", pol: "mieszkać, żyć"},
{ eng: "story", pol: "opowiadanie, historia"},
{ eng: "where", pol: "gdzie"},
{ eng: "saw", pol: "widzieć"},
{ eng: "after", pol: "po"},
{ eng: "far", pol: "daleko"},
{ eng: "back", pol: "z powrotem, plecy"},
{ eng: "sea", pol: "morze"},
{ eng: "little", pol: "mało, mały"},
{ eng: "draw", pol: "rysować"},
{ eng: "only", pol: "tylko"},
{ eng: "left", pol: "lewy, pozostawiony"},
{ eng: "round", pol: "odkrągły, okrążać, runda"},
{ eng: "late", pol: "późno"},
{ eng: "man", pol: "człowiek, mężczyzna"},
{ eng: "run", pol: "biegać"},
{ eng: "year", pol: "rok"},
{ eng: "don't", pol: "(zaprzeczenie)"},
{ eng: "came", pol: "przyjechał, przyszedł"},
{ eng: "while", pol: "podczas gdy, pewien czas"},
{ eng: "show", pol: "pokazywać"},
{ eng: "press", pol: "nacisnąć, prasa"},
{ eng: "every", pol: "każdy"},
{ eng: "close", pol: "blisko"},
{ eng: "good", pol: "dobry, dobrze"},
{ eng: "night", pol: "noc"},
{ eng: "me", pol: "mi, mnie"},
{ eng: "real", pol: "prawdziwy"},
{ eng: "give", pol: "dawać"},
{ eng: "life", pol: "życie"},
{ eng: "our", pol: "nasze"},
{ eng: "few", pol: "niewiele"},
{ eng: "under", pol: "pod"},
{ eng: "north", pol: "północ, północny"},
{ eng: "open", pol: "otwierać"},
{ eng: "seem", pol: "wydawać się"},
{ eng: "simple", pol: "proste"},
{ eng: "together", pol: "razem"},
{ eng: "several", pol: "kilka"},
{ eng: "next", pol: "następny"},
{ eng: "vowel", pol: "samogłoska"},
{ eng: "white", pol: "biały"},
{ eng: "ten", pol: "dziesięć"},
{ eng: "toward", pol: "w kierunku, naprzód"},
{ eng: "children", pol: "dzieci"},
{ eng: "war", pol: "wojna"},
{ eng: "begin", pol: "zacyznać"},
{ eng: "lay", pol: "leżeć"},
{ eng: "got", pol: "dostawać"},
{ eng: "against", pol: "przeciwko"},
{ eng: "walk", pol: "chodzić, spacerować"},
{ eng: "pattern", pol: "wzór"},
{ eng: "example", pol: "przykład"},
{ eng: "slow", pol: "wolny, powolny"},
{ eng: "ease", pol: "łagodzić"},
{ eng: "center", pol: "centrum, środek"},
{ eng: "paper", pol: "papier, gazeta"},
{ eng: "love", pol: "miłość, kochać"},
{ eng: "group", pol: "grupa, zespół"},
{ eng: "person", pol: "osoba"},
{ eng: "always", pol: "zawsze"},
{ eng: "money", pol: "pieniądze"},
{ eng: "music", pol: "muzyka"},
{ eng: "serve", pol: "służyć"},
{ eng: "those", pol: "tamte"},
{ eng: "appear", pol: "pojawiać się"},
{ eng: "both", pol: "razem, oboje"},
{ eng: "road", pol: "droga"},
{ eng: "mark", pol: "znak, oznaczać, ślad, ocena"},
{ eng: "map", pol: "mapa"},
{ eng: "often", pol: "często"},
{ eng: "rain", pol: "deszcz"},
{ eng: "letter", pol: "list, litera"},
{ eng: "rule", pol: "rządzić, zasada"},
{ eng: "until", pol: "dopóki"},
{ eng: "govern", pol: "rządzić, zasada"},
{ eng: "mile", pol: "mila"},
{ eng: "pull", pol: "ciągnąć, nalewać"},
{ eng: "river", pol: "rzeka"},
{ eng: "cold", pol: "zimny"},
{ eng: "car", pol: "samochód"},
{ eng: "notice", pol: "zauważyć, ogłoszenie, wymówienie"},
{ eng: "feet", pol: "stopy"},
{ eng: "voice", pol: "głos"},
{ eng: "care", pol: "opieka, troszczyć się"},
{ eng: "unit", pol: "rozdział, jednostka"},
{ eng: "second", pol: "drugi"},
{ eng: "power", pol: "siła, władza"},
{ eng: "book", pol: "książka"},
{ eng: "town", pol: "miasto"},
{ eng: "carry", pol: "nosić"},
{ eng: "fine", pol: "świetny, w porządku"},
{ eng: "took", pol: "wziąć, zabrać"},
{ eng: "certain", pol: "pewny"},
{ eng: "science", pol: "nauka"},
{ eng: "fly", pol: "latać"},
{ eng: "eat", pol: "jeść"},
{ eng: "fall", pol: "spadać, upadek"},
{ eng: "room", pol: "pokój, miejsce"},
{ eng: "lead", pol: "prowadzić, przewodzić, kierować"},
{ eng: "friend", pol: "przyjaciel"},
{ eng: "cry", pol: "płakać"},
{ eng: "began", pol: "zaczynać"},
{ eng: "dark", pol: "ciemny, mroczny"},
{ eng: "idea", pol: "pomysł"},
{ eng: "machine", pol: "maszyna"},
{ eng: "fish", pol: "ryba"},
{ eng: "note", pol: "notować, notatka, zauważyć"},
{ eng: "mountain", pol: "góra, górski"},
{ eng: "wait", pol: "czekać"},
{ eng: "stop", pol: "zatrzymać się"},
{ eng: "plan", pol: "plan, zaplanować"},
{ eng: "once", pol: "kiedyś, jeden raz"},
{ eng: "figure", pol: "licza, postać, figura, dojść do wniosku"},
{ eng: "base", pol: "podstawa, spód, baza"},
{ eng: "star", pol: "gwiazda"},
{ eng: "hear", pol: "słyszeć"},
{ eng: "box", pol: "pudełko"},
{ eng: "horse", pol: "koń"},
{ eng: "noun", pol: "rzeczownik"},
{ eng: "cut", pol: "ciąć"},
{ eng: "field", pol: "pole, boisko, dziedzina"},
{ eng: "sure", pol: "pewny"},
{ eng: "rest", pol: "odpoczywać"},
{ eng: "watch", pol: "oglądać"},
{ eng: "correct", pol: "poprawiać"},
{ eng: "color", pol: "kolor, kolorować"},
{ eng: "able", pol: "być w stanie coś zrobić"},
{ eng: "face", pol: "twarz"},
{ eng: "pound", pol: "walić, funt"},
{ eng: "wood", pol: "drewno, las"},
{ eng: "done", pol: "zrobione"},
{ eng: "main", pol: "główny"},
{ eng: "beauty", pol: "piękno"},
{ eng: "enough", pol: "wystarczająco"},
{ eng: "drive", pol: "prowadzić samochód"},
{ eng: "plain", pol: "zwykły, prosty, gładki"},
{ eng: "stood", pol: "stać"},
{ eng: "girl", pol: "dziewczyna"},
{ eng: "contain", pol: "zawierać"},
{ eng: "usual", pol: "zwykły"},
{ eng: "front", pol: "przód"},
{ eng: "young", pol: "młody"},
{ eng: "teach", pol: "uczyć kogoś"},
{ eng: "ready", pol: "gotowy"},
{ eng: "week", pol: "tydzień"},
{ eng: "above", pol: "ponad"},
{ eng: "final", pol: "ostatni, końcowy, finał"},
{ eng: "ever", pol: "zawsze, kiedykolwiek"},
{ eng: "gave", pol: "dawać"},
{ eng: "red", pol: "czerwony"},
{ eng: "green", pol: "zielony"},
{ eng: "list", pol: "lista, spis, wymieniać"},
{ eng: "oh", pol: "och"},
{ eng: "though", pol: "chociaż, jednak"},
{ eng: "quick", pol: "szybko"},
{ eng: "feel", pol: "czuć"},
{ eng: "develop", pol: "rozwijać"},
{ eng: "talk", pol: "mówić, rozmawiać"},
{ eng: "ocean", pol: "ocean"},
{ eng: "bird", pol: "ptak"},
{ eng: "warm", pol: "ciepło"},
{ eng: "soon", pol: "wkrótce"},
{ eng: "free", pol: "wolny, darmowy"},
{ eng: "body", pol: "ciało"},
{ eng: "minute", pol: "minuta"},
{ eng: "dog", pol: "pies"},
{ eng: "strong", pol: "silny"},
{ eng: "family", pol: "rodzina"},
{ eng: "special", pol: "szczególny, specjalny"},
{ eng: "direct", pol: "bezpośredni"},
{ eng: "mind", pol: "umysł"},
{ eng: "pose", pol: "poza"},
{ eng: "behind", pol: "za sobą"},
{ eng: "leave", pol: "zostawić, opuścić"},
{ eng: "clear", pol: "wyraźny, przejrzysty"},
{ eng: "song", pol: "piosenka"},
{ eng: "tail", pol: "ogon"},
{ eng: "measure", pol: "mierzyć"},
{ eng: "produce", pol: "produkować"},
{ eng: "door", pol: "drzwi"},
{ eng: "fact", pol: "fakt"},
{ eng: "product", pol: "produkt"},
{ eng: "street", pol: "ulica"},
{ eng: "black", pol: "czarny"},
{ eng: "inch", pol: "cal"},
{ eng: "short", pol: "krótki"},
{ eng: "multiply", pol: "pomnożyć"},
{ eng: "numeral", pol: "liczebnik"},
{ eng: "nothing", pol: "nic"},
{ eng: "class", pol: "klasa, klasowy"},
{ eng: "course", pol: "kurs"},
{ eng: "wind", pol: "wiatr"},
{ eng: "stay", pol: "zostać"},
{ eng: "question", pol: "pytanie"},
{ eng: "happen", pol: "stać się, zdarzyć"},
{ eng: "full", pol: "pełny"},
{ eng: "complete", pol: "całkowity, ukończony"},
{ eng: "force", pol: "moc, siła, zmuszać"},
{ eng: "ship", pol: "statek"},
{ eng: "blue", pol: "niebieski"},
{ eng: "area", pol: "obszar"},
{ eng: "object", pol: "przedmiot, cel"},
{ eng: "half", pol: "połowa"},
{ eng: "decide", pol: "decydować"},
{ eng: "rock", pol: "skała"},
{ eng: "surface", pol: "powierzchnia"},
{ eng: "order", pol: "porządek"},
{ eng: "deep", pol: "głęboko"},
{ eng: "fire", pol: "ogień"},
{ eng: "moon", pol: "księżyc"},
{ eng: "south", pol: "południe"},
{ eng: "island", pol: "wyspa"},
{ eng: "problem", pol: "zadanie, problem"},
{ eng: "foot", pol: "stopa"},
{ eng: "piece", pol: "kawałek, część"},
{ eng: "system", pol: "system, układ"},
{ eng: "told", pol: "powiedzieć"},
{ eng: "busy", pol: "zajęty"},
{ eng: "knew", pol: "wiedzieć"},
{ eng: "test", pol: "test, egzamin, próba"},
{ eng: "pass", pol: "zdać, podać"},
{ eng: "record", pol: "nagranie, płyta"},
{ eng: "since", pol: "odkąd"},
{ eng: "boat", pol: "łódź"},
{ eng: "top", pol: "szczyt"},
{ eng: "common", pol: "powszechny, pospolity, wspólny"},
{ eng: "whole", pol: "cały"},
{ eng: "gold", pol: "złoto"},
{ eng: "king", pol: "król"},
{ eng: "possible", pol: "możliwy"},
{ eng: "space", pol: "przestrzeń, odstęp, kosmos"},
{ eng: "plane", pol: "samolot"},
{ eng: "heard", pol: "usłyszeć"},
{ eng: "stead", pol: "zamiast kogoś"},
{ eng: "best", pol: "najlepszy"},
{ eng: "dry", pol: "suchy"},
{ eng: "hour", pol: "godzina"},
{ eng: "wonder", pol: "cud, zastanawiać się"},
{ eng: "better", pol: "lepszy"},
{ eng: "laugh", pol: "śmiać się"},
{ eng: "true", pol: "prawda"},
{ eng: "thousand", pol: "tysiąc"},
{ eng: "during", pol: "podczas"},
{ eng: "ago", pol: "(ileś dni) temu"},
{ eng: "hundred", pol: "stop"},
{ eng: "ran", pol: "biegać"},
{ eng: "five", pol: "pięć"},
{ eng: "check", pol: "sprawdzić"},
{ eng: "remember", pol: "pamiętać"},
{ eng: "game", pol: "gra"},
{ eng: "step", pol: "krok, stopień"},
{ eng: "shape", pol: "kształt, forma"},
{ eng: "early", pol: "wczesny"},
{ eng: "equate", pol: "przyrównywać"},
{ eng: "hold", pol: "trzymać"},
{ eng: "hot", pol: "gorący"},
{ eng: "west", pol: "zachód"},
{ eng: "miss", pol: "tracić, spóźnić się, panna"},
{ eng: "ground", pol: "teren, ziemia, grunt"},
{ eng: "brought", pol: "przynosić"},
{ eng: "interest", pol: "zainteresowanie, udział, odsetki"},
{ eng: "heat", pol: "upał,podgrzewać"},
{ eng: "reach", pol: "sięgać"},
{ eng: "snow", pol: "śnieg"},
{ eng: "fast", pol: "szybki"},
{ eng: "tire", pol: "zmęczony"},
{ eng: "verb", pol: "czasownik"},
{ eng: "bring", pol: "przynosić"},
{ eng: "sing", pol: "śpiewać"},
{ eng: "yes", pol: "tak"},
{ eng: "listen", pol: "słychać"},
{ eng: "distant", pol: "odległy, daleki"},
{ eng: "six", pol: "sześć"},
{ eng: "fill", pol: "wypełnić"},
{ eng: "table", pol: "stół"},
{ eng: "travel", pol: "podróżować"},
{ eng: "paint", pol: "malować"},
{ eng: "less", pol: "mniej"},
{ eng: "language", pol: "język"},
{ eng: "morning", pol: "poranek"},
{ eng: "among", pol: "pośród"},
{ eng: "grand", pol: "wielki, okazały"},
{ eng: "cat", pol: "kot"},
{ eng: "ball", pol: "piłka"},
{ eng: "century", pol: "stulecie, wiek"},
{ eng: "yet", pol: "jeszcze, a mimo to"},
{ eng: "consider", pol: "brać pod uwagę, rozważać"},
{ eng: "wave", pol: "fala, machać"},
{ eng: "type", pol: "typ, rodzaj, pisać na maszynie"},
{ eng: "drop", pol: "upuścić, kropla"},
{ eng: "law", pol: "prawo"},
{ eng: "heart", pol: "serce"},
{ eng: "bit", pol: "kawałek"},
{ eng: "am", pol: "(ja) jestem"},
{ eng: "coast", pol: "wybrzeże"},
{ eng: "present", pol: "teraźniejszy, obecny"},
{ eng: "copy", pol: "kopia, kopiować"},
{ eng: "heavy", pol: "ciężki"},
{ eng: "phrase", pol: "zdanie, wyrażenie"},
{ eng: "dance", pol: "taniec"},
{ eng: "silent", pol: "cichy"},
{ eng: "engine", pol: "silnik"},
{ eng: "tall", pol: "wysoki"},
{ eng: "position", pol: "pozycja, położenie"},
{ eng: "sand", pol: "piasek"},
{ eng: "arm", pol: "ręka"},
{ eng: "soil", pol: "gleba, ziemia"},
{ eng: "wide", pol: "szeroki"},
{ eng: "roll", pol: "toczyć, bułka"},
{ eng: "sail", pol: "żeglować"},
{ eng: "temperature", pol: "temperatura"},
{ eng: "material", pol: "materiał"},
{ eng: "finger", pol: "palec"},
{ eng: "size", pol: "rozmiar"},
{ eng: "industry", pol: "przemysł"},
{ eng: "vary", pol: "urozmaicać"},
{ eng: "value", pol: "wartość"},
{ eng: "settle", pol: "rozstrzygać, zasiedlać"},
{ eng: "fight", pol: "walka"},
{ eng: "speak", pol: "mówić"},
{ eng: "lie", pol: "leżeć, kłamać"},
{ eng: "weight", pol: "waga"},
{ eng: "beat", pol: "bicie, rytm"},
{ eng: "general", pol: "ogólny, generalny"},
{ eng: "excite", pol: "ekscytować, podniecać się"},
{ eng: "ice", pol: "lód"},
{ eng: "natural", pol: "naturalny"},
{ eng: "matter", pol: "sprawa, mieć znaczenie"},
{ eng: "view", pol: "widok, podgląd"},
{ eng: "circle", pol: "krąg, koło"},
{ eng: "sense", pol: "sens, znaczenie"},
{ eng: "pair", pol: "para"},
{ eng: "ear", pol: "ucho"},
{ eng: "include", pol: "zawierać"},
{ eng: "else", pol: "jeszcze, inne"},
{ eng: "divide", pol: "podzielić"},
{ eng: "quite", pol: "całkiem"},
{ eng: "syllable", pol: "sylaba"},
{ eng: "broke", pol: "złamać"},
{ eng: "felt", pol: "czuć"},
{ eng: "case", pol: "sprawa, przypadek, skrzynia, walizka"},
{ eng: "perhaps", pol: "być może"},
{ eng: "middle", pol: "środkowy"},
{ eng: "pick", pol: "wybrać, podnosić"},
{ eng: "kill", pol: "zabić"},
{ eng: "sudden", pol: "nagły"},
{ eng: "son", pol: "syn"},
{ eng: "count", pol: "liczyć"},
{ eng: "lake", pol: "jezioro"},
{ eng: "square", pol: "kwadrat"},
{ eng: "moment", pol: "chwila, moment"},
{ eng: "reason", pol: "powód"},
{ eng: "scale", pol: "skala, rozmiar"},
{ eng: "length", pol: "długość"},
{ eng: "loud", pol: "głośny"},
{ eng: "represent", pol: "reprezentować"},
{ eng: "spring", pol: "wiosna"},
{ eng: "art", pol: "sztuka"},
{ eng: "observe", pol: "obserwować, zauważyć"},
{ eng: "subject", pol: "przedmiot"},
{ eng: "child", pol: "dziecko"},
{ eng: "region", pol: "region, obszar, okolica"},
{ eng: "straigh", pol: "prosty, jasny, bezpośredni"},
{ eng: "energy", pol: "energia"},
{ eng: "consonant", pol: "spółgłoska"},
{ eng: "hunt", pol: "polować"},
{ eng: "nation", pol: "naród"},
{ eng: "probable", pol: "prawdopodobny"},
{ eng: "dictionary", pol: "słownik"},
{ eng: "bed", pol: "łóżko"},
{ eng: "milk", pol: "mleko"},
{ eng: "brother", pol: "brat"},
{ eng: "speed", pol: "szybkość"},
{ eng: "egg", pol: "jajko"},
{ eng: "method", pol: "metoda, sposób"},
{ eng: "ride", pol: "jazda, jeździć"},
{ eng: "organ", pol: "narząd, organ"},
{ eng: "cell", pol: "komórka"},
{ eng: "pay", pol: "płacić"},
{ eng: "believe", pol: "wierzyć, uważać"},
{ eng: "age", pol: "wiek"},
{ eng: "fraction", pol: "ułamek"},
{ eng: "section", pol: "sekcja, część, odcinek"},
{ eng: "forest", pol: "las"},
{ eng: "dress", pol: "sukienka"},
{ eng: "sit", pol: "siadać"},
{ eng: "cloud", pol: "chmura"},
{ eng: "race", pol: "wyścig, rasa"},
{ eng: "surprise", pol: "zaskoczyć, niespodzianka"},
{ eng: "window", pol: "okno"},
{ eng: "quiet", pol: "cicho"},
{ eng: "store", pol: "sklep, schowek, zapasy"},
{ eng: "stone", pol: "kamień"},
{ eng: "summer", pol: "lato"},
{ eng: "tiny", pol: "malutki"},
{ eng: "train", pol: "pociąg"},
{ eng: "climb", pol: "wspinać się"},
{ eng: "sleep", pol: "spać"},
{ eng: "cool", pol: "chłodny, opanowany"},
{ eng: "prove", pol: "dowód, udowodnić"},
{ eng: "design", pol: "projekt, projektować"},
{ eng: "lone", pol: "samotny"},
{ eng: "poor", pol: "biedny"},
{ eng: "leg", pol: "noga"},
{ eng: "lot", pol: "wiele"},
{ eng: "exercise", pol: "ćwiczenie"},
{ eng: "experiment", pol: "eksperyment, doświadczenie"},
{ eng: "wall", pol: "ściana"},
{ eng: "bottom", pol: "dno, spód, dupa"},
{ eng: "catch", pol: "złapać"},
{ eng: "mount", pol: "wierzchowiec, dosiadać"},
{ eng: "iron", pol: "żelazo, prasować, żelazko"},
{ eng: "wish", pol: "życzenie, pragnienie"},
{ eng: "single", pol: "pojedynczy"},
{ eng: "key", pol: "klucz"},
{ eng: "sky", pol: "niebo"},
{ eng: "stick", pol: "patyk, wtykać"},
{ eng: "board", pol: "deska, tablica, podkład"},
{ eng: "flat", pol: "płaski, mieszkanie"},
{ eng: "joy", pol: "przyjemność, radość"},
{ eng: "twenty", pol: "dwadzieścia"},
{ eng: "winter", pol: "zima"},
{ eng: "skin", pol: "skóra"},
{ eng: "sat", pol: "siedzieć"},
{ eng: "smile", pol: "uśmiech, uśmiechać się"},
{ eng: "written", pol: "napisane"},
{ eng: "crease", pol: "gnieść, zagięcie"},
{ eng: "wild", pol: "dziki"},
{ eng: "hole", pol: "dziura"},
{ eng: "instrument", pol: "instrument, narzędzie"},
{ eng: "trade", pol: "wymiana, handel"},
{ eng: "kept", pol: "zachować, zatrzymać"},
{ eng: "melody", pol: "melodia"},
{ eng: "glass", pol: "szkło, szklanka"},
{ eng: "trip", pol: "wycieczka"},
{ eng: "grass", pol: "trawa"},
{ eng: "office", pol: "biuro"},
{ eng: "cow", pol: "krowa"},
{ eng: "receive", pol: "otrzymać"},
{ eng: "job", pol: "praca"},
{ eng: "row", pol: "rząd, wiosłować"},
{ eng: "edge", pol: "krawędź"},
{ eng: "mouth", pol: "buzia"},
{ eng: "sign", pol: "znak"},
{ eng: "exact", pol: "dokładny"},
{ eng: "visit", pol: "odwiedzać"},
{ eng: "symbol", pol: "symbol"},
{ eng: "past", pol: "przeszłość"},
{ eng: "die", pol: "umierać"},
{ eng: "soft", pol: "miękki"},
{ eng: "least", pol: "najmniejszy, przynajmniej"},
{ eng: "fun", pol: "zabawa"},
{ eng: "trouble", pol: "problem, kłopoty"},
{ eng: "bright", pol: "jasny, pogodny, bystry"},
{ eng: "shout", pol: "krzyk"},
{ eng: "gas", pol: "benzyna, gaz"},
{ eng: "except", pol: "z wyjątkiem"},
{ eng: "weather", pol: "pogoda"},
{ eng: "wrote", pol: "pisać"},
{ eng: "month", pol: "miesiąc"},
{ eng: "seed", pol: "nasiono, ziarno"},
{ eng: "million", pol: "milion"},
{ eng: "tone", pol: "ton, sygnał"},
{ eng: "bear", pol: "niedźwiedź"},
{ eng: "join", pol: "dołączyć"},
{ eng: "finish", pol: "kończyć"},
{ eng: "suggest", pol: "sugerować, proponować"},
{ eng: "happy", pol: "szczęśliwy"},
{ eng: "clean", pol: "czysty"},
{ eng: "hope", pol: "nadzieja"},
{ eng: "break", pol: "łamać, przerwa"},
{ eng: "flower", pol: "kwiatek"},
{ eng: "lady", pol: "dama, kobieta"},
{ eng: "clothe", pol: "ubierać"},
{ eng: "yard", pol: "podwórko, ogródek"},
{ eng: "strange", pol: "dziwny"},
{ eng: "rise", pol: "podnosić się"},
{ eng: "gone", pol: "przeminąć, miniony"},
{ eng: "bad", pol: "zły"},
{ eng: "jump", pol: "skok, skakać"},
{ eng: "blow", pol: "dmuchać"},
{ eng: "baby", pol: "dziecko"},
{ eng: "oil", pol: "olej, oliwa, ropa"},
{ eng: "eight", pol: "osiem"},
{ eng: "blood", pol: "krew"},
{ eng: "village", pol: "wioska"},
{ eng: "touch", pol: "dotyk, dotykać"},
{ eng: "meet", pol: "spotkać, poznawać"},
{ eng: "grew", pol: "rosnąć"},
{ eng: "root", pol: "korzeń"},
{ eng: "cent", pol: "cent"},
{ eng: "buy", pol: "kupować"},
{ eng: "mix", pol: "mieszać"},
{ eng: "raise", pol: "podwyżka, podnosić"},
{ eng: "team", pol: "drużyna, grupa"},
{ eng: "solve", pol: "rozwiązać"},
{ eng: "wire", pol: "drut"},
{ eng: "metal", pol: "metal"},
{ eng: "cost", pol: "kosztować"},
{ eng: "whether", pol: "czy"},
{ eng: "lost", pol: "zgubić, zagubione"},
{ eng: "push", pol: "pchać"},
{ eng: "brown", pol: "brązowy"},
{ eng: "seven", pol: "siedem"},
{ eng: "wear", pol: "nosić (ubranie)"},
{ eng: "paragraph", pol: "paragraf, akapit"},
{ eng: "garden", pol: "ogród"},
{ eng: "third", pol: "trzeci"},
{ eng: "equal", pol: "równy"},
{ eng: "shall", pol: "czy (mam coś zrobić)"},
{ eng: "sent", pol: "wysłać"},
{ eng: "held", pol: "trzymać"},
{ eng: "choose", pol: "wybierać"},
{ eng: "hair", pol: "włosy"},
{ eng: "fell", pol: "spadać"},
{ eng: "describe", pol: "opisywać"},
{ eng: "fit", pol: "pasować, odpowiadać, w dobrej kondycji"},
{ eng: "cook", pol: "gotować"},
{ eng: "flow", pol: "przepływ, strumień"},
{ eng: "floor", pol: "podłoga"},
{ eng: "fair", pol: "jasny, sprawiedliwy"},
{ eng: "either", pol: "obojętni który, jeden i drugi"},
{ eng: "bank", pol: "bank"},
{ eng: "result", pol: "wynik, rezultat"},
{ eng: "collect", pol: "zbierać"},
{ eng: "burn", pol: "palić"},
{ eng: "save", pol: "oszczędzić, ratować"},
{ eng: "hill", pol: "wzgórze"},
{ eng: "control", pol: "kontrolować"},
{ eng: "safe", pol: "bezpieczny"},
{ eng: "decimal", pol: "ułamek dziesiętny"},
{ eng: "gentle", pol: "delikatny"},
{ eng: "truck", pol: "ciężarówka"},
{ eng: "woman", pol: "kobieta"},
{ eng: "noise", pol: "hałas"},
{ eng: "captain", pol: "kapitan"},
{ eng: "level", pol: "poziom"},
{ eng: "practice", pol: "praktyka, ćwiczyć"},
{ eng: "chance", pol: "szansa"},
{ eng: "separate", pol: "oddzielić"},
{ eng: "gather", pol: "zbierać, gormadzić"},
{ eng: "difficult", pol: "trudność, trudny"},
{ eng: "shop", pol: "sklep"},
{ eng: "doctor", pol: "doktor, lekarz"},
{ eng: "stretch", pol: "rozciągać"},
{ eng: "please", pol: "proszę"},
{ eng: "throw", pol: "rzut"},
{ eng: "protect", pol: "chronić"},
{ eng: "shine", pol: "lśnić, świecić"},
{ eng: "noon", pol: "południe"},
{ eng: "property", pol: "własność, posiadłość"},
{ eng: "whose", pol: "czyje, czyja"},
{ eng: "column", pol: "kolumna, rubryka"},
{ eng: "locate", pol: "lokalizować"},
{ eng: "molecule", pol: "molekuła, cząsteczka"},
{ eng: "ring", pol: "pierścionek"},
{ eng: "select", pol: "wybrać"},
{ eng: "character", pol: "charakter, postać"},
{ eng: "wrong", pol: "źle, błąd"},
{ eng: "insect", pol: "insekt, owad"},
{ eng: "gray", pol: "szary"},
{ eng: "caught", pol: "złapać, złapany"},
{ eng: "repeat", pol: "powtarzać"},
{ eng: "period", pol: "okres"},
{ eng: "require", pol: "wymagać"},
{ eng: "indicate", pol: "wskazywać"},
{ eng: "broad", pol: "szeroki"},
{ eng: "radio", pol: "radio"},
{ eng: "prepare", pol: "przygotowywać"},
{ eng: "spoke", pol: "mówić"},
{ eng: "salt", pol: "sól"},
{ eng: "atom", pol: "atom"},
{ eng: "nose", pol: "nos"},
{ eng: "human", pol: "człowiek"},
{ eng: "plural", pol: "mnogi, liczba mnoga"},
{ eng: "anger", pol: "złość"},
{ eng: "effect", pol: "efekt, skutek"},
{ eng: "claim", pol: "twierdzić, żądać"},
{ eng: "electric", pol: "elektryczny"},
{ eng: "continent", pol: "kontynent"},
{ eng: "expect", pol: "oczekiwać"},
{ eng: "oxygen", pol: "tlen"},
{ eng: "crop", pol: "zboże, plon"},
{ eng: "sugar", pol: "cukier"},
{ eng: "modern", pol: "nowoczesny"},
{ eng: "death", pol: "śmierć"},
{ eng: "element", pol: "element, pierwiastek"},
{ eng: "pretty", pol: "ładny"},
{ eng: "hit", pol: "uderzenie"},
{ eng: "skill", pol: "umiejętność"},
{ eng: "student", pol: "student, uczeń"},
{ eng: "women", pol: "kobieyu"},
{ eng: "corner", pol: "narożnik, róg"},
{ eng: "season", pol: "sezon, pora roku"},
{ eng: "party", pol: "przyjęcie, partia"},
{ eng: "solution", pol: "rozwiązanie"},
{ eng: "supply", pol: "zapas, dostarczać"},
{ eng: "magnet", pol: "magnes"},
{ eng: "bone", pol: "kość"},
{ eng: "silver", pol: "srebro"},
{ eng: "rail", pol: "szyna, poręcz"},
{ eng: "thank", pol: "dziękować"},
{ eng: "imagine", pol: "wyobrażać sobie"},
{ eng: "branch", pol: "gałąź, oddział"},
{ eng: "provide", pol: "dostarczyć, zaopatrywać"},
{ eng: "match", pol: "dopasować, zapałka, mecz"},
{ eng: "agree", pol: "zgoda, zgadzać się"},
{ eng: "suffix", pol: "przyrostek"},
{ eng: "thus", pol: "w taki sposób, a zatem"},
{ eng: "especially", pol: "zwłaszcza"},
{ eng: "capital", pol: "stolica"},
{ eng: "fig", pol: "figa"},
{ eng: "won't", pol: "nie będzie"},
{ eng: "afraid", pol: "bać się"},
{ eng: "chair", pol: "krzesło"},
{ eng: "huge", pol: "wielki"},
{ eng: "danger", pol: "niebezieczeństwo, zagrożenie"},
{ eng: "sister", pol: "siostra"},
{ eng: "fruit", pol: "owoc"},
{ eng: "steel", pol: "stal, stalowy"},
{ eng: "rich", pol: "bogaty"},
{ eng: "discuss", pol: "omawiać, dyskutować"},
{ eng: "thick", pol: "gruby"},
{ eng: "forward", pol: "do przodu"},
{ eng: "soldier", pol: "żołnierz"},
{ eng: "similar", pol: "podobny"},
{ eng: "process", pol: "proces, przetwarzanie"},
{ eng: "guide", pol: "przewodnik, oprowadzać"},
{ eng: "operate", pol: "obsługiać, operować"},
{ eng: "experience", pol: "doświadczenie"},
{ eng: "guess", pol: "zgadywać"},
{ eng: "score", pol: "wynik, zaliczać"},
{ eng: "necessary", pol: "konieczny"},
{ eng: "apple", pol: "jabłko"},
{ eng: "sharp", pol: "ostry"},
{ eng: "bought", pol: "kupować"},
{ eng: "wing", pol: "skrzydło"},
{ eng: "led", pol: "prowadzić, kierować"},
{ eng: "create", pol: "tworzyć"},
{ eng: "pitch", pol: "przemowa, boisko, wysokość"},
{ eng: "neighbor", pol: "sąsiad"},
{ eng: "coat", pol: "płaszcz"},
{ eng: "wash", pol: "myć"},
{ eng: "mass", pol: "masa, msza"},
{ eng: "bat", pol: "nietoperz"},
{ eng: "card", pol: "karta"},
{ eng: "rather", pol: "raczej"},
{ eng: "band", pol: "zespół (muzyczny)"},
{ eng: "crowd", pol: "tłum"},
{ eng: "rope", pol: "lina"},
{ eng: "corn", pol: "kukurydza"},
{ eng: "slip", pol: "poślizgnąć się"},
{ eng: "compare", pol: "porównywać"},
{ eng: "win", pol: "wygrana"},
{ eng: "poem", pol: "wiersz"},
{ eng: "dream", pol: "sen, śnić"},
{ eng: "string", pol: "sznurek"},
{ eng: "evening", pol: "wieczór"},
{ eng: "bell", pol: "dzwonek"},
{ eng: "condition", pol: "arynek, stan"},
{ eng: "depend", pol: "zależeć od"},
{ eng: "feed", pol: "karmić"},
{ eng: "meat", pol: "mięso"},
{ eng: "tool", pol: "narzędzie"},
{ eng: "rub", pol: "pocierać"},
{ eng: "total", pol: "całkowity"},
{ eng: "tube", pol: "rura, tubka"},
{ eng: "basic", pol: "podstawowy"},
{ eng: "famous", pol: "sławny"},
{ eng: "smell", pol: "zapach, pachnieć, wąchać"},
{ eng: "dollar", pol: "dolar"},
{ eng: "valley", pol: "dolina"},
{ eng: "stream", pol: "potok, nurt"},
{ eng: "nor", pol: "ani, żaden"},
{ eng: "fear", pol: "strach"},
{ eng: "double", pol: "podwójny"},
{ eng: "sight", pol: "wzrok"},
{ eng: "seat", pol: "miejsce"},
{ eng: "thin", pol: "chudy, cienki"},
{ eng: "arrive", pol: "przybywać"},
{ eng: "triangle", pol: "trójkąt"},
{ eng: "master", pol: "mistrz, pan"},
{ eng: "planet", pol: "planeta"},
{ eng: "track", pol: "szlak, tor, droga"},
{ eng: "hurry", pol: "śpieszyć się"},
{ eng: "parent", pol: "rodzic"},
{ eng: "chief", pol: "szef, wódz"},
{ eng: "shore", pol: "brzeg, wybrzeże"},
{ eng: "colony", pol: "kolonia"},
{ eng: "division", pol: "podział, oddział"},
{ eng: "clock", pol: "zegar"},
{ eng: "sheet", pol: "kartka papieru, prześcieradło"},
{ eng: "mine", pol: "moje"},
{ eng: "substance", pol: "substancja"},
{ eng: "tie", pol: "wiązać, krawat"},
{ eng: "favor", pol: "przychylność, faworyzować"},
{ eng: "enter", pol: "wejście, wchodzić"},
{ eng: "connect", pol: "łączyć"},
{ eng: "major", pol: "główny, ważny"},
{ eng: "post", pol: "stanowisko"},
{ eng: "fresh", pol: "świeży"},
{ eng: "spend", pol: "wydawać"},
{ eng: "search", pol: "szukać"},
{ eng: "chord", pol: "akord"},
{ eng: "send", pol: "wysyłać"},
{ eng: "fat", pol: "gruby"},
{ eng: "yellow", pol: "żółty"},
{ eng: "glad", pol: "zadowolony"},
{ eng: "gun", pol: "pistolet"},
{ eng: "original", pol: "pierwotny, autentyczny"},
{ eng: "allow", pol: "pozwolić"},
{ eng: "share", pol: "podzielić się"},
{ eng: "print", pol: "drukować"},
{ eng: "station", pol: "stacja, dworzec"},
{ eng: "dead", pol: "martwy"},
{ eng: "spot", pol: "miejse, plamka"},
{ eng: "bread", pol: "chleb"},
{ eng: "desert", pol: "pustynia, opuszczone"},
{ eng: "charge", pol: "opłata, oskarżenie"},
{ eng: "suit", pol: "garnitur"},
{ eng: "proper", pol: "właściwy, odpowiedni"},
{ eng: "current", pol: "obecny"},
{ eng: "bar", pol: "bar, krata, tabliczka (czekolady)"},
{ eng: "lift", pol: "winda, podwozić, podnosić"},
{ eng: "offer", pol: "oferować, oferta"},
{ eng: "rose", pol: "róża, rosnąć"},
{ eng: "segment", pol: "część, odcinek"},
{ eng: "continue", pol: "trwać, kontynuować"},
{ eng: "slave", pol: "niewolnik"},
{ eng: "block", pol: "blok, klocek, bryła"},
{ eng: "duck", pol: "kaczka"},
{ eng: "chart", pol: "wykres"},
{ eng: "instant", pol: "natychmiastowy"},
{ eng: "hat", pol: "czapka, kapelusz"},
{ eng: "market", pol: "rynek"},
{ eng: "sell", pol: "sprzedawać"},
{ eng: "degree", pol: "stopień"},
{ eng: "success", pol: "sukces, odnosić sukces"},
{ eng: "populate", pol: "zaludniać"},
{ eng: "company", pol: "firma"},
{ eng: "chick", pol: "pisklę"},
{ eng: "substract", pol: "odejmować"},
{ eng: "dear", pol: "drogi"},
{ eng: "event", pol: "wydarzenie"},
{ eng: "enemy", pol: "wróg"},
{ eng: "particular", pol: "szczególny"},
{ eng: "reply", pol: "odpowiadać"},
{ eng: "deal", pol: "umowa"},
{ eng: "drink", pol: "pić"},
{ eng: "swim", pol: "pływać"},
{ eng: "occur", pol: "zdarzać się"},
{ eng: "term", pol: "warunek, termin"},
{ eng: "support", pol: "wspierać"},
{ eng: "opposite", pol: "naprzeciwko"},
{ eng: "speech", pol: "przemowa"},
{ eng: "wife", pol: "żona"},
{ eng: "nature", pol: "natura, środowisko"},
{ eng: "shoe", pol: "but"},
{ eng: "range", pol: "zasięg, łańcuch"},
{ eng: "shoulder", pol: "ramię"},
{ eng: "steam", pol: "para, parować"},
{ eng: "spread", pol: "zasięg, rozprzestrzeniać się"},
{ eng: "motion", pol: "ruch"},
{ eng: "arrange", pol: "organizować, aranżować"},
{ eng: "path", pol: "ścieżka"},
{ eng: "camp", pol: "obóz"},
{ eng: "liquid", pol: "płyn, ciecz"},
{ eng: "invent", pol: "wynaleźć, wymyślić"},
{ eng: "log", pol: "kłoda, dziennik, zapisywać w dzienniku"},
{ eng: "cotton", pol: "wełna"},
{ eng: "meant", pol: "znaczyć"},
{ eng: "born", pol: "rodzić się"},
{ eng: "quotient", pol: "współczynnik"},
{ eng: "determine", pol: "określać, ustalać"},
{ eng: "teeth", pol: "zęby"},
{ eng: "quart", pol: "kwarta"},
{ eng: "shell", pol: "muszla"},
{ eng: "nine", pol: "dziewięć"},
{ eng: "neck", pol: "szyja"},
{ eng: "description", pol: "opis"},
{ eng: "translate", pol: "tłumaczyć"},
{ eng: "sword", pol: "miecz"},
{ eng: "movie", pol: "film"},
{ eng: "cinema", pol: "kino"},
{ eng: "lazy", pol: "leniwy"}
]
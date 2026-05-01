import { useState, useEffect, useCallback, useRef } from "react";

const RAW = [{"g":"αβγό, το","e":"egg"},{"g":"αγαπάω, -ώ","e":"to love"},{"g":"αγάπη, η","e":"love"},{"g":"αγαπημέν-ος, -η, -ο","e":"favorite, beloved"},{"g":"αγγελία, η","e":"announcement"},{"g":"αγγούρι, το","e":"cucumber"},{"g":"άγιος, ο / αγία, η","e":"saint"},{"g":"αγκαλιά, η","e":"embrace, hug"},{"g":"αγορά, η","e":"market, marketplace"},{"g":"αγοράζω","e":"to buy"},{"g":"αγόρι, το","e":"boy"},{"g":"άγχος, το","e":"stress, anxiety"},{"g":"αγώνας, ο","e":"match, game"},{"g":"άδεια, η","e":"leave"},{"g":"άδει-ος, -α, -ο","e":"empty, vacant"},{"g":"αδερφή, η","e":"sister"},{"g":"αδερφός, ο","e":"brother"},{"g":"αδύνατ-ος, -η, -ο","e":"thin, slim"},{"g":"αέρας, ο","e":"wind"},{"g":"αεροδρόμιο, το","e":"airport"},{"g":"αεροπλάνο, το","e":"airplane"},{"g":"άθλημα, το","e":"sport"},{"g":"αθλητισμός, ο","e":"sports"},{"g":"αίθουσα, η","e":"classroom / hall"},{"g":"αισθάνομαι","e":"to feel, to sense"},{"g":"αίτηση, η","e":"application form"},{"g":"αιτία, η","e":"cause, reason"},{"g":"ακολουθώ","e":"to follow"},{"g":"ακόμη","e":"yet, still, even"},{"g":"ακούω","e":"to hear, to listen"},{"g":"ακριβ-ός, -ή, -ό","e":"expensive"},{"g":"ακριβώς","e":"exactly, precisely"},{"g":"ακτή, η","e":"beach"},{"g":"αλλά","e":"but"},{"g":"αλάτι, το","e":"salt"},{"g":"αλεύρι, το","e":"flour"},{"g":"αλήθεια, η","e":"truth"},{"g":"αλλαγή, η","e":"change"},{"g":"αλλάζω","e":"to change"},{"g":"άλλ-ος, -η, -ο","e":"other, another"},{"g":"αμέσως","e":"immediately, right away"},{"g":"αμύγδαλο, το","e":"almond"},{"g":"αν","e":"if"},{"g":"ανάγκη, η","e":"need, necessity"},{"g":"ανακατεύω","e":"to mix, to blend"},{"g":"ανακύκλωση, η","e":"recycling"},{"g":"αναπνοή, η","e":"breath, breathing"},{"g":"αναψυκτικό, το","e":"refreshment, beverage"},{"g":"ανεβαίνω","e":"to rise, to climb"},{"g":"άνθρωπος, ο","e":"person, human being"},{"g":"ανιψιός, ο","e":"nephew"},{"g":"ανιψιά, η","e":"niece"},{"g":"άνεση, η","e":"comfort"},{"g":"αξιοθέατο, το","e":"sight, attraction"},{"g":"ανοίγω","e":"to open"},{"g":"άνοιξη, η","e":"spring"},{"g":"ανοιχτ-ός, -ή, -ό","e":"open"},{"g":"αντίθετ-ος, -η, -ο","e":"opposite"},{"g":"άντρας, ο","e":"man / husband"},{"g":"απαντάω, -ώ","e":"to answer, to reply"},{"g":"απάντηση, η","e":"answer, reply"},{"g":"απαραίτητ-ος, -η, -ο","e":"necessary, essential"},{"g":"απέναντι","e":"across, opposite"},{"g":"απλ-ός, -ή, -ό","e":"simple, plain"},{"g":"απλώνω","e":"to spread"},{"g":"από","e":"from, since"},{"g":"απόγευμα, το","e":"afternoon"},{"g":"αποθήκη, η","e":"storage room"},{"g":"αποκτώ","e":"to have, to obtain"},{"g":"αποτέλεσμα, το","e":"result"},{"g":"απόφαση, η","e":"decision"},{"g":"αποφασίζω","e":"to decide"},{"g":"απορρυπαντικό, το","e":"detergent"},{"g":"αργ-ός, -ή, -ό","e":"slow"},{"g":"αργώ","e":"to be late"},{"g":"(μου) αρέσει","e":"to like"},{"g":"αριθμός, ο","e":"number"},{"g":"αρκετ-ός, -ή, -ό","e":"enough, plenty"},{"g":"αριστερά","e":"to the left"},{"g":"αρνί, το","e":"lamb"},{"g":"αρχαιότητα, η","e":"antiquity, ancient times"},{"g":"αρχή, η","e":"beginning, start"},{"g":"αρχιτέκτονας, ο/η","e":"architect"},{"g":"αρχίζω","e":"to begin, to start"},{"g":"άρρωστ-ος, -η, -ο","e":"ill, sick"},{"g":"ασανσέρ, το","e":"lift, elevator"},{"g":"άσκηση, η","e":"exercise, task"},{"g":"άσπρ-ος, -η, -ο","e":"white"},{"g":"αστεί-ος, -α, -ο","e":"funny"},{"g":"αστυνομία, η","e":"police"},{"g":"αστυνομικός, ο/η","e":"policeman/woman"},{"g":"ασφάλεια, η","e":"safety, security"},{"g":"άσχημ-ος, -η, -ο","e":"ugly"},{"g":"άτομο, το","e":"person"},{"g":"ατυχία, η","e":"misfortune"},{"g":"Αύγουστος, ο","e":"August"},{"g":"αυλή, η","e":"yard"},{"g":"αύριο","e":"tomorrow"},{"g":"αυτοκίνητο, το","e":"car"},{"g":"αφεντικό, το","e":"boss"},{"g":"αφήνω","e":"to leave, to let go"},{"g":"αφίσα, η","e":"poster"},{"g":"ας","e":"let(s)"},{"g":"βάζω","e":"to put"},{"g":"βαθμός, ο","e":"grade, degree"},{"g":"βαλίτσα, η","e":"suitcase"},{"g":"βαμβάκι, το","e":"cotton"},{"g":"βαρετ-ός, -ή, -ό","e":"boring"},{"g":"βασικ-ός, -ή, -ό","e":"basic, main"},{"g":"βασιλικός, ο","e":"basil"},{"g":"βάφω","e":"to paint, to dye"},{"g":"βάφτιση, η","e":"christening"},{"g":"βγάζω","e":"to take out, to take off"},{"g":"βγαίνω","e":"to get out, to go out"},{"g":"βέβαια","e":"of course, certainly"},{"g":"βεβαιώνω","e":"to confirm, to affirm"},{"g":"βήμα, το","e":"step"},{"g":"βήχας, ο","e":"cough"},{"g":"βιβλίο, το","e":"book"},{"g":"βιβλιοθήκη, η","e":"library / bookcase"},{"g":"βιβλιοπωλείο, το","e":"bookstore"},{"g":"βιογραφικό, το","e":"CV / curriculum vitae"},{"g":"βλέπω","e":"to see, to look, to watch"},{"g":"βοηθάω, -ώ","e":"to help"},{"g":"βοήθεια, η","e":"help"},{"g":"βόλτα, η","e":"walk"},{"g":"κάνω βόλτα","e":"to take a walk"},{"g":"βόρει-ος, -α, -ο","e":"northern"},{"g":"βουνό, το","e":"mountain"},{"g":"βούτυρο, το","e":"butter"},{"g":"βραδινό, το","e":"dinner, supper"},{"g":"βράδυ, το","e":"evening"},{"g":"βράζω","e":"to boil"},{"g":"βραστ-ός, -ή, -ό","e":"boiled"},{"g":"βρέχει","e":"it is raining"},{"g":"βρίσκω","e":"to find"},{"g":"βρίσκομαι","e":"to be located"},{"g":"βρόμικ-ος, -η, -ο","e":"dirty"},{"g":"βροχή, η","e":"rain"},{"g":"γάλα, το","e":"milk"},{"g":"γάμος, ο","e":"wedding, marriage"},{"g":"γάντι, το","e":"glove"},{"g":"γάτα, η","e":"cat"},{"g":"γεια","e":"hi / hello"},{"g":"γείτονας, ο","e":"neighbour"},{"g":"γειτονιά, η","e":"neighbourhood"},{"g":"γεμάτ-ος, -η, -ο","e":"full"},{"g":"γεμίζω","e":"to fill"},{"g":"γέννηση, η","e":"birth"},{"g":"γενέθλια, τα","e":"birthday"},{"g":"γερ-ός, -ή, -ό","e":"healthy, strong"},{"g":"γεύμα, το","e":"meal"},{"g":"γεύση, η","e":"taste"},{"g":"γήπεδο, το","e":"playing field"},{"g":"γιαγιά, η","e":"grandmother"},{"g":"γιαούρτι, το","e":"yoghurt"},{"g":"γιατρός, ο/η","e":"doctor"},{"g":"γίνομαι","e":"to become"},{"g":"γιος, ο","e":"son"},{"g":"γιορτάζω","e":"to celebrate"},{"g":"γιορτή, η","e":"party, feast"},{"g":"γκαράζ, το","e":"garage"},{"g":"γλέντι, το","e":"party"},{"g":"γλυκ-ός, -ιά, -ό","e":"sweet"},{"g":"γλυκό, το","e":"sweet, dessert"},{"g":"γνώμη, η","e":"opinion"},{"g":"γνωρίζω","e":"to know"},{"g":"γνωριμία, η","e":"acquaintance"},{"g":"γνώση, η","e":"knowledge"},{"g":"γονείς, οι","e":"parents"},{"g":"γράμμα, το","e":"letter"},{"g":"γραμματέας, ο/η","e":"secretary"},{"g":"γραμματική, η","e":"grammar"},{"g":"γραμματόσημο, το","e":"stamp"},{"g":"γραμμή, η","e":"line"},{"g":"γραφείο, το","e":"desk / office"},{"g":"γράφω","e":"to write"},{"g":"γρήγορα","e":"fast, quickly"},{"g":"γρίπη, η","e":"flu"},{"g":"γυαλιά, τα","e":"eyeglasses"},{"g":"γυαλιά ηλίου, τα","e":"sunglasses"},{"g":"γυμναστήριο, το","e":"gym"},{"g":"γυμναστική, η","e":"exercise, gymnastics"},{"g":"γυναίκα, η","e":"woman"},{"g":"γύρω","e":"around"},{"g":"δάσκαλος, ο / δασκάλα, η","e":"teacher"},{"g":"δάσος, το","e":"forest"},{"g":"δείχνω","e":"to show"},{"g":"δέκα","e":"ten"},{"g":"Δεκέμβριος, ο","e":"December"},{"g":"δεξιά","e":"to the right"},{"g":"Δευτέρα, η","e":"Monday"},{"g":"δεύτερ-ος, -η, -ο","e":"second"},{"g":"δηλαδή","e":"meaning, that is"},{"g":"δήμαρχος, ο/η","e":"mayor"},{"g":"δημητριακά, τα","e":"cereal"},{"g":"δήμος, ο","e":"municipality"},{"g":"δημόσι-ος, -α, -ο","e":"public"},{"g":"δημοσιογράφος, ο/η","e":"journalist, reporter"},{"g":"δηλώνω","e":"to state"},{"g":"διαβάζω","e":"to read"},{"g":"διαβατήριο, το","e":"passport"},{"g":"διαδρομή, η","e":"way, route"},{"g":"διαδίκτυο, το","e":"internet"},{"g":"διάθεση, η","e":"mood"},{"g":"δίαιτα, η","e":"diet"},{"g":"διακοπές, οι","e":"holiday, vacation"},{"g":"διαλέγω","e":"to choose"},{"g":"διάλειμμα, το","e":"break"},{"g":"διαμέρισμα, το","e":"apartment, flat"},{"g":"διάρκεια, η","e":"duration"},{"g":"διαρκώ","e":"to last"},{"g":"διάσημ-ος, -η, -ο","e":"famous"},{"g":"διασκεδάζω","e":"to have fun"},{"g":"διασκέδαση, η","e":"entertainment, fun"},{"g":"διαφορά, η","e":"difference"},{"g":"διαφορετικ-ός, -ή, -ό","e":"different"},{"g":"διαφωνώ","e":"to disagree"},{"g":"δικηγόρος, ο/η","e":"lawyer, attorney"},{"g":"δίκλινο (δωμάτιο), το","e":"double room"},{"g":"δίνω","e":"to give"},{"g":"δίπλα","e":"beside, next"},{"g":"διπλ-ός, -ή, -ό","e":"double"},{"g":"διορθώνω","e":"to correct"},{"g":"δοκιμάζω","e":"to taste"},{"g":"δουλειά, η","e":"work"},{"g":"δουλεύω","e":"to work"},{"g":"δραστηριότητα, η","e":"activity"},{"g":"δρόμος, ο","e":"road, street"},{"g":"δύσκολ-ος, -η, -ο","e":"difficult"},{"g":"δυστυχώς","e":"unfortunately"},{"g":"δωμάτιο, το","e":"room"},{"g":"δωρεάν","e":"free of charge"},{"g":"δώρο, το","e":"present, gift"},{"g":"εβδομάδα, η","e":"week"},{"g":"εγγόνι, το","e":"grandchild"},{"g":"έγγραφο, το","e":"document"},{"g":"εδώ","e":"here"},{"g":"έθιμο, το","e":"custom, tradition"},{"g":"εθνικότητα, η","e":"nationality"},{"g":"ειδήσεις, οι","e":"news"},{"g":"είδος, το","e":"kind, type"},{"g":"εικόνα, η","e":"image, picture"},{"g":"ειρήνη, η","e":"peace"},{"g":"είσοδος, η","e":"entrance"},{"g":"εισιτήριο, το","e":"ticket"},{"g":"εκδήλωση, η","e":"event, show"},{"g":"εκδρομή, η","e":"excursion"},{"g":"εκεί","e":"there"},{"g":"εκκλησία, η","e":"church"},{"g":"έκπληξη, η","e":"surprise"},{"g":"εκπαίδευση, η","e":"education"},{"g":"έκπτωση, η","e":"discount"},{"g":"ελαιόλαδο, το","e":"olive oil"},{"g":"ελληνικ-ός, -ή, -ό","e":"Greek, Hellenic"},{"g":"ελπίζω","e":"to hope"},{"g":"εμπορικό κέντρο, το","e":"shopping mall"},{"g":"εμπειρία, η","e":"experience"},{"g":"ενδιαφέρομαι","e":"to be interested in"},{"g":"ενημερώνω","e":"to inform, to notify"},{"g":"ενοίκιο, το","e":"rent"},{"g":"εξετάσεις, οι","e":"exams"},{"g":"εξηγώ","e":"to explain"},{"g":"εξοχή, η","e":"countryside"},{"g":"εξυπηρετώ","e":"to serve"},{"g":"έξω","e":"out, outside"},{"g":"επάγγελμα, το","e":"profession, job"},{"g":"επαναλαμβάνω","e":"to repeat"},{"g":"επειδή","e":"because"},{"g":"επικοινωνώ","e":"to contact, to communicate"},{"g":"επιλέγω","e":"to choose, to select"},{"g":"έπιπλο, το","e":"furniture"},{"g":"επίσης","e":"also, too"},{"g":"επίσημ-ος, -η, -ο","e":"official, formal"},{"g":"επισκέπτομαι","e":"to visit"},{"g":"επιστρέφω","e":"to come back, to return"},{"g":"επόμεν-ος, -η, -ο","e":"next, following"},{"g":"εποχή, η","e":"season"},{"g":"επώνυμο, το","e":"surname"},{"g":"εργασία, η","e":"work, project"},{"g":"εργοστάσιο, το","e":"factory"},{"g":"έρχομαι","e":"to come, to arrive"},{"g":"ερώτηση, η","e":"question"},{"g":"εστιατόριο, το","e":"restaurant"},{"g":"εταιρεία, η","e":"company, firm"},{"g":"ετοιμάζω","e":"to prepare"},{"g":"έτοιμ-ος, -η, -ο","e":"ready"},{"g":"ευγενικ-ός, -ή, -ό","e":"kind, polite"},{"g":"ευκαιρία, η","e":"opportunity, chance"},{"g":"εύκολ-ος, -η, -ο","e":"easy"},{"g":"ευρώ, το","e":"euro"},{"g":"ευτυχώς","e":"luckily, fortunately"},{"g":"ευχάριστ-ος, -η, -ο","e":"pleasant"},{"g":"ευχαριστώ","e":"to thank"},{"g":"εφημερίδα, η","e":"newspaper"},{"g":"εφορία, η","e":"tax office"},{"g":"έχω","e":"to have"},{"g":"ζάχαρη, η","e":"sugar"},{"g":"ζέστη, η","e":"heat, warmth"},{"g":"ζεστ-ός, -ή, -ό","e":"warm, hot"},{"g":"ζευγάρι, το","e":"pair"},{"g":"ζητάω, -ώ","e":"to ask for"},{"g":"ζυμαρικό, το","e":"pasta"},{"g":"ζω","e":"to live"},{"g":"ζωγραφίζω","e":"to paint, to draw"},{"g":"ζωγραφική, η","e":"painting, drawing"},{"g":"ζωή, η","e":"life"},{"g":"ζωηρ-ός, -ή, -ό","e":"naughty, lively"},{"g":"ζώο, το","e":"animal"},{"g":"ηθοποιός, ο/η","e":"actor / actress"},{"g":"ηλεκτρικ-ός, -ή, -ό","e":"electric"},{"g":"ηλικία, η","e":"age"},{"g":"ήλιος, ο","e":"sun"},{"g":"έχει ήλιο","e":"it is sunny"},{"g":"ημέρα, η","e":"day"},{"g":"ημερομηνία, η","e":"date"},{"g":"ήρεμ-ος, -η, -ο","e":"calm, peaceful"},{"g":"ησυχία, η","e":"silence, quietness"},{"g":"θα","e":"will (future particle)"},{"g":"θάλασσα, η","e":"sea"},{"g":"θέα, η","e":"view"},{"g":"θέατρο, το","e":"theater"},{"g":"θεατρικό έργο, το","e":"play"},{"g":"θεία, η","e":"aunt"},{"g":"θείος, ο","e":"uncle"},{"g":"θέλω","e":"to want"},{"g":"θέμα, το","e":"subject, topic"},{"g":"θερμοκρασία, η","e":"temperature"},{"g":"θέση, η","e":"seat, place, position"},{"g":"θυμάμαι","e":"to remember"},{"g":"θυμίζω","e":"to remind"},{"g":"ιδέα, η","e":"idea, suggestion"},{"g":"ίδι-ος, -α, -ο","e":"the same"},{"g":"ιερ-ός, -ή, -ό","e":"holy, sacred"},{"g":"ισόγειο, το","e":"ground floor"},{"g":"ικανότητα, η","e":"ability, skill"},{"g":"ιστοσελίδα, η","e":"webpage"},{"g":"ιστορία, η","e":"history, story"},{"g":"ίσως","e":"maybe, perhaps"},{"g":"καθαρίζω","e":"to clean"},{"g":"καθαρ-ός, -ή, -ό","e":"clean"},{"g":"κάθε","e":"every"},{"g":"καθόλου","e":"any, at all"},{"g":"κάθομαι","e":"to sit down"},{"g":"καθρέφτης, ο","e":"mirror"},{"g":"καθυστέρηση, η","e":"delay"},{"g":"και","e":"and"},{"g":"καινούρι-ος, -α, -ο","e":"new"},{"g":"καιρός, ο","e":"weather"},{"g":"καίω","e":"to burn"},{"g":"κακ-ός, -ή, -ό","e":"bad"},{"g":"καλά","e":"good, well"},{"g":"καλημέρα","e":"good morning"},{"g":"καλλιτέχνης, ο/η","e":"artist"},{"g":"καλοκαίρι, το","e":"summer"},{"g":"καλ-ός, -ή, -ό","e":"good"},{"g":"καλύπτω","e":"to cover"},{"g":"κανάλι, το","e":"channel, TV station"},{"g":"καναπές, ο","e":"sofa"},{"g":"κανονικ-ός, -ή, -ό","e":"normal, regular"},{"g":"κάνω","e":"to do, to make"},{"g":"κάποι-ος, -α","e":"someone"},{"g":"καράβι, το","e":"boat, ship"},{"g":"καρδιά, η","e":"heart"},{"g":"καρέκλα, η","e":"chair"},{"g":"καρότο, το","e":"carrot"},{"g":"κάρτα, η","e":"card"},{"g":"κάστρο, το","e":"castle"},{"g":"κατάθεση, η","e":"deposit"},{"g":"καταλαβαίνω","e":"to understand"},{"g":"καταπληκτικ-ός, -ή, -ό","e":"amazing, wonderful"},{"g":"κατάσταση, η","e":"state, condition, situation"},{"g":"καταφέρνω","e":"to manage, to achieve"},{"g":"κατεβαίνω","e":"to get down"},{"g":"κατηγορία, η","e":"category"},{"g":"κάτι","e":"something"},{"g":"κάτοικος, ο/η","e":"inhabitant"},{"g":"κατσαρόλα, η","e":"pot, saucepan"},{"g":"κάτω","e":"down"},{"g":"κάτω από","e":"under"},{"g":"κέικ, το","e":"cake"},{"g":"κείμενο, το","e":"text"},{"g":"κέντρο, το","e":"centre"},{"g":"καφετέρια, η","e":"café"},{"g":"καφές, ο","e":"coffee"},{"g":"κεντρικ-ός, -ή, -ό","e":"central"},{"g":"κεραυνός, ο","e":"thunder"},{"g":"κεράσι, το","e":"cherry"},{"g":"κερδίζω","e":"to win"},{"g":"κεφάλι, το","e":"head"},{"g":"κήπος, ο","e":"garden"},{"g":"κιθάρα, η","e":"guitar"},{"g":"κιλό, το","e":"kilo"},{"g":"κίνηση, η","e":"traffic"},{"g":"κινητό τηλέφωνο, το","e":"mobile phone"},{"g":"κλασικ-ός, -ή, -ό","e":"classical"},{"g":"κλέφτης, ο / κλέφτρα, η","e":"thief, robber"},{"g":"κλοπή, η","e":"theft, robbery"},{"g":"κόβω","e":"to cut, to chop"},{"g":"κοιμάμαι","e":"to sleep"},{"g":"κομμάτι, το","e":"part"},{"g":"κοινωνικ-ός, -ή, -ό","e":"social"},{"g":"κόκκιν-ος, -η, -ο","e":"red"},{"g":"κολυμβητήριο, το","e":"swimming pool"},{"g":"κολύμπι, το","e":"swimming"},{"g":"κομμωτήριο, το","e":"hair salon"},{"g":"κοντά","e":"close, near"},{"g":"κοντ-ός, -ή, -ό","e":"short"},{"g":"κόρη, η","e":"daughter"},{"g":"κορίτσι, το","e":"girl"},{"g":"κόσμος, ο","e":"people, world"},{"g":"κοστίζω","e":"to cost"},{"g":"κοστούμι, το","e":"suit, costume"},{"g":"κοτόπουλο, το","e":"chicken"},{"g":"κουβέρτα, η","e":"blanket"},{"g":"κουζίνα, η","e":"kitchen"},{"g":"κουτί, το","e":"box"},{"g":"κούραση, η","e":"tiredness, fatigue"},{"g":"κουρασμέν-ος, -η, -ο","e":"tired"},{"g":"κουραστικ-ός, -ή, -ό","e":"tiring"},{"g":"κουρτίνα, η","e":"curtain"},{"g":"κρασί, το","e":"wine"},{"g":"κρατάω, -ώ","e":"to hold, to last"},{"g":"κρέας, το","e":"meat"},{"g":"κρεβάτι, το","e":"bed"},{"g":"κρέμα, η","e":"cream"},{"g":"κριθάρι, το","e":"barley"},{"g":"κρύ-ος, -α, -ο","e":"cold, chilly"},{"g":"κρύο, το","e":"cold"},{"g":"κρυώνω","e":"to be cold, to get cold"},{"g":"κτίριο, το","e":"building"},{"g":"κύμα, το","e":"wave"},{"g":"κυρία, η","e":"lady, madam"},{"g":"κύριος, ο","e":"sir, mister"},{"g":"λάθος, το","e":"mistake, error"},{"g":"λαϊκή μουσική, η","e":"popular music"},{"g":"λαιμός, ο","e":"neck"},{"g":"λαχανικό, το","e":"vegetable"},{"g":"λείπω","e":"to be absent, to be missing"},{"g":"λεκές, ο","e":"stain"},{"g":"λεμόνι, το","e":"lemon"},{"g":"λέξη, η","e":"word"},{"g":"λεξικό, το","e":"dictionary"},{"g":"λεπτό, το","e":"minute"},{"g":"λεφτά, τα","e":"money"},{"g":"λέω","e":"to say"},{"g":"λεωφορείο, το","e":"bus"},{"g":"λιακάδα, η","e":"sunshine"},{"g":"λιμάνι, το","e":"port"},{"g":"λιώνω","e":"to melt"},{"g":"λογαριασμός, ο","e":"bill"},{"g":"λογοτεχνία, η","e":"literature"},{"g":"λουλούδι, το","e":"flower"},{"g":"λυπάμαι","e":"to be sorry, to be sad"},{"g":"λύση, η","e":"solution, answer"},{"g":"μαγιό, το","e":"swim suit"},{"g":"μάγειρας, ο","e":"cook, chef"},{"g":"μαγειρεύω","e":"to cook"},{"g":"μαζί","e":"together"},{"g":"μαθαίνω","e":"to learn"},{"g":"μάθημα, το","e":"lesson, course, class"},{"g":"μακριά","e":"far, far away"},{"g":"μαλλιά, τα","e":"hair"},{"g":"μαλώνω","e":"to quarrel, to fight"},{"g":"μαμά, η","e":"mom, mum"},{"g":"μαντεύω","e":"to guess"},{"g":"μαξιλάρι, το","e":"pillow"},{"g":"μάτι, το","e":"eye"},{"g":"μαχαίρι, το","e":"knife"},{"g":"με λένε","e":"my name is"},{"g":"μεγάλ-ος, -η, -ο","e":"big, large / grown up"},{"g":"μεγαλώνω","e":"to grow up"},{"g":"μέλι, το","e":"honey"},{"g":"μέλλον, το","e":"future"},{"g":"μεζές, ο","e":"snack, appetizer"},{"g":"μέρα, η","e":"day"},{"g":"μερικ-οί, -ές, -ά","e":"some, several"},{"g":"μέρος, το","e":"place, location"},{"g":"μεσημέρι, το","e":"noon"},{"g":"μεσημεριανό, το","e":"lunch"},{"g":"μετά","e":"after, afterwards"},{"g":"μετακομίζω","e":"to move"},{"g":"μεταφέρω","e":"to transfer, to carry"},{"g":"μετρό, το","e":"metro, subway"},{"g":"μέχρι","e":"until, till, up to"},{"g":"μήλο, το","e":"apple"},{"g":"μήνας, ο","e":"month"},{"g":"μήνυμα, το","e":"message"},{"g":"μητέρα, η","e":"mother"},{"g":"μιλάω, -ώ","e":"to talk, to speak"},{"g":"μισθός, ο","e":"salary, wage"},{"g":"μισ-ός, -ή, -ό","e":"half"},{"g":"μνημείο, το","e":"monument"},{"g":"μόδα, η","e":"fashion, trend"},{"g":"μόνο","e":"only"},{"g":"μόν-ος, -η, -ο","e":"alone"},{"g":"μονόκλινο (δωμάτιο), το","e":"single room"},{"g":"μοντέρν-ος, -α, -ο","e":"modern"},{"g":"μουσείο, το","e":"museum"},{"g":"μουσική, η","e":"music"},{"g":"μουσικός, ο/η","e":"musician"},{"g":"μπαίνω","e":"to get into, to enter"},{"g":"μπαλκόνι, το","e":"balcony"},{"g":"μπαμπάς, ο","e":"dad, daddy"},{"g":"μπανάνα, η","e":"banana"},{"g":"μπάνιο, το","e":"bathroom, bath"},{"g":"μπερδεύω","e":"to confuse, to tangle"},{"g":"μπουκάλι, το","e":"bottle"},{"g":"μπλε","e":"blue"},{"g":"μπορώ","e":"can"},{"g":"μπουφάν, το","e":"jacket, coat"},{"g":"μπρόκολο, το","e":"broccoli"},{"g":"μπροστά από","e":"in front of"},{"g":"μπύρα, η","e":"beer"},{"g":"μυστικό, το","e":"secret"},{"g":"μωρό, το","e":"baby"},{"g":"ναός, ο","e":"church, temple"},{"g":"νέα, τα","e":"news"},{"g":"νερό, το","e":"water"},{"g":"νευριάζω","e":"to get angry"},{"g":"νηπιαγωγείο, το","e":"kindergarten"},{"g":"νησί, το","e":"island"},{"g":"νικητής, ο / νικήτρια, η","e":"winner"},{"g":"νοικιάζω","e":"to rent"},{"g":"νονός, ο","e":"godfather"},{"g":"νονά, η","e":"godmother"},{"g":"νιώθω","e":"to feel"},{"g":"νομίζω","e":"to think, to believe"},{"g":"νοσοκόμος, ο / νοσοκόμα, η","e":"nurse"},{"g":"νόστιμ-ος, -η, -ο","e":"delicious"},{"g":"νότι-ος, -α, -ο","e":"southern"},{"g":"ντοκιμαντέρ, το","e":"documentary"},{"g":"ντομάτα, η","e":"tomato"},{"g":"ντουλάπα, η","e":"closet, wardrobe"},{"g":"ντουλάπι, το","e":"cupboard"},{"g":"ντύνομαι","e":"to get dressed"},{"g":"νυστάζω","e":"to be sleepy"},{"g":"νύχτα, η","e":"night"},{"g":"νωρίς","e":"early"},{"g":"ξάδερφος, ο / ξαδέρφη, η","e":"cousin"},{"g":"ξανά","e":"again"},{"g":"ξεκουράζομαι","e":"to rest, to relax"},{"g":"ξενοδοχείο, το","e":"hotel"},{"g":"ξέρω","e":"to know"},{"g":"ξεχνάω, -ώ","e":"to forget"},{"g":"ξηρ-ός, -ή, -ό","e":"dry"},{"g":"ξοδεύω","e":"to spend"},{"g":"ξύδι, το","e":"vinegar"},{"g":"ξυπνάω, -ώ","e":"to wake up"},{"g":"οδοντίατρος, ο/η","e":"dentist"},{"g":"οδηγάω, -ώ","e":"to drive"},{"g":"οικογένεια, η","e":"family"},{"g":"οινόπνευμα, το","e":"alcohol, spirit"},{"g":"Οκτώβριος, ο","e":"October"},{"g":"όλ-οι, -ες, -α","e":"all, every"},{"g":"ολόκληρ-ος, -η, -ο","e":"whole, entire"},{"g":"ομάδα, η","e":"team"},{"g":"ομίχλη, η","e":"mist, fog"},{"g":"ομορφιά, η","e":"beauty"},{"g":"όμορφ-ος, -η, -ο","e":"beautiful, pretty"},{"g":"ομπρέλα, η","e":"umbrella"},{"g":"όμως","e":"but, however"},{"g":"ονειρεύομαι","e":"to dream"},{"g":"όνομα, το","e":"name"},{"g":"ονοματεπώνυμο, το","e":"full name"},{"g":"όταν","e":"when"},{"g":"ότι","e":"that"},{"g":"ουζερί, το","e":"greek tavern"},{"g":"ούζο, το","e":"ouzo"},{"g":"όχι","e":"no"},{"g":"πάγος, ο","e":"ice"},{"g":"παγωτό, το","e":"ice cream"},{"g":"παθαίνω","e":"something happens to me"},{"g":"παιδί, το","e":"child, kid"},{"g":"παίζω","e":"to play"},{"g":"παίρνω","e":"to take"},{"g":"παιχνίδι, το","e":"game, toy"},{"g":"πάλι","e":"again"},{"g":"παλι-ός, -ά, -ό","e":"old"},{"g":"παλτό, το","e":"coat"},{"g":"πάντα","e":"always"},{"g":"παντελόνι, το","e":"trousers, pants"},{"g":"παντρεύομαι","e":"to get married"},{"g":"παππούς, ο","e":"grandfather"},{"g":"παραγγέλλω/παραγγέλνω","e":"to order"},{"g":"παραγγελία, η","e":"order"},{"g":"παράδειγμα, το","e":"example"},{"g":"παραδοσιακ-ός, -ή, -ό","e":"traditional"},{"g":"παράθυρο, το","e":"window"},{"g":"παρακαλώ","e":"please"},{"g":"παραλία, η","e":"beach, coast"},{"g":"παρακολουθώ","e":"to watch"},{"g":"παράσταση, η","e":"show, performance"},{"g":"παρατηρώ","e":"to observe, to notice"},{"g":"παρατήρηση, η","e":"comment, remark"},{"g":"παρέα, η","e":"company (friends)"},{"g":"παροιμία, η","e":"proverb, saying"},{"g":"παρουσιάζω","e":"to present"},{"g":"Πάσχα, το","e":"Easter"},{"g":"πατάτα, η","e":"potato"},{"g":"πεθαίνω","e":"to die, to pass away"},{"g":"πεινάω, -ώ","e":"to be hungry"},{"g":"πείθω","e":"to persuade, to convince"},{"g":"πελάτης, ο / πελάτισσα, η","e":"client, customer"},{"g":"Πέμπτη, η","e":"Thursday"},{"g":"πενήντα","e":"fifty"},{"g":"πέντε","e":"five"},{"g":"πεπόνι, το","e":"melon"},{"g":"περιγράφω","e":"to describe"},{"g":"περιβάλλον, το","e":"environment"},{"g":"περιλαμβάνω","e":"to include"},{"g":"περιμένω","e":"to wait"},{"g":"περιοδικό, το","e":"magazine"},{"g":"περιοχή, η","e":"region, district"},{"g":"περίπου","e":"about, more or less"},{"g":"περνάω, -ώ","e":"to pass"},{"g":"περπατάω, -ώ","e":"to walk"},{"g":"πέρσι","e":"last year"},{"g":"πετσέτα, η","e":"towel"},{"g":"πέφτω","e":"to fall"},{"g":"πηγαίνω","e":"to go"},{"g":"πιάτο, το","e":"plate, dish"},{"g":"πίνω","e":"to drink"},{"g":"πιπέρι, το","e":"pepper"},{"g":"πιρούνι, το","e":"fork"},{"g":"πισίνα, η","e":"swimming pool"},{"g":"πιστεύω","e":"to believe"},{"g":"πιστοποιητικό, το","e":"certificate"},{"g":"πλατεία, η","e":"square"},{"g":"πλένω","e":"to wash"},{"g":"πληρώνω","e":"to pay"},{"g":"πλοίο, το","e":"boat, ship"},{"g":"πλούσι-ος, -α, -ο","e":"rich, wealthy"},{"g":"πλυντήριο, το","e":"washing machine"},{"g":"ποδήλατο, το","e":"bicycle, bike"},{"g":"ποιότητα, η","e":"quality"},{"g":"πόλη, η","e":"city"},{"g":"πολιτισμός, ο","e":"civilization, culture"},{"g":"πολίτης, ο","e":"citizen"},{"g":"πολύ","e":"much, very"},{"g":"πολυθρόνα, η","e":"armchair"},{"g":"πολυκατοικία, η","e":"apartment building"},{"g":"πόνος, ο","e":"pain, ache"},{"g":"πονόδοντος, ο","e":"toothache"},{"g":"πονοκέφαλος, ο","e":"headache"},{"g":"πόρτα, η","e":"door"},{"g":"πορτοκάλι, το","e":"orange"},{"g":"πορτοφόλι, το","e":"wallet"},{"g":"ποτήρι, το","e":"glass, cup"},{"g":"ποτέ","e":"never"},{"g":"πότε","e":"when"},{"g":"ποτό, το","e":"drink"},{"g":"πουκάμισο, το","e":"shirt"},{"g":"πουλί, το","e":"bird"},{"g":"πουλάω, -ώ","e":"to sell"},{"g":"πραγματικά","e":"really, indeed"},{"g":"πράσιν-ος, -η, -ο","e":"green"},{"g":"πρέπει","e":"must / have to"},{"g":"πρίζα, η","e":"socket"},{"g":"πριν","e":"before"},{"g":"πρόβλημα, το","e":"problem"},{"g":"προετοιμάζω","e":"to prepare"},{"g":"προϊόν, το","e":"product"},{"g":"πρόκληση, η","e":"challenge"},{"g":"προσέχω","e":"to be careful, to pay attention"},{"g":"προσθέτω","e":"to add"},{"g":"πρόσκληση, η","e":"invitation"},{"g":"προσοχή, η","e":"attention"},{"g":"προσπαθώ","e":"to try, to make an effort"},{"g":"πρόταση, η","e":"sentence"},{"g":"προτείνω","e":"to suggest, to propose"},{"g":"προτιμάω, -ώ","e":"to prefer"},{"g":"πτήση, η","e":"flight"},{"g":"πρωί, το","e":"morning"},{"g":"πρωινό (γεύμα), το","e":"breakfast"},{"g":"πρώτ-ος, -η, -ο","e":"first"},{"g":"Πρωτοχρονιά, η","e":"New Year's Eve"},{"g":"πυρετός, ο","e":"fever, temperature"},{"g":"πυροσβεστική, η","e":"fire department"},{"g":"ραντεβού, το","e":"date, appointment"},{"g":"ρεύμα, το","e":"electricity"},{"g":"ρίγανη, η","e":"oregano"},{"g":"ρόλος, ο","e":"role, part"},{"g":"ρούχο, το","e":"cloth"},{"g":"ρύζι, το","e":"rice"},{"g":"ρωτάω, -ώ","e":"to ask"},{"g":"Σάββατο, το","e":"Saturday"},{"g":"Σαββατοκύριακο, το","e":"weekend"},{"g":"σακάκι, το","e":"jacket, blazer"},{"g":"σαλάτα, η","e":"salad"},{"g":"σαλόνι, το","e":"living room"},{"g":"σαμπουάν, το","e":"shampoo"},{"g":"σαπούνι, το","e":"soap"},{"g":"σβήνω","e":"to delete, to erase"},{"g":"σε","e":"at, to"},{"g":"σειρά, η","e":"order, line, row"},{"g":"σελίδα, η","e":"page"},{"g":"σεντόνι, το","e":"sheet"},{"g":"σερβίρω","e":"to serve"},{"g":"σερβιτόρος, ο/η","e":"waiter"},{"g":"σημαντικ-ός, -ή, -ό","e":"important, significant"},{"g":"σημαίνω","e":"to mean"},{"g":"σημασία, η","e":"meaning"},{"g":"σήμερα","e":"today"},{"g":"σκάλα, η","e":"staircase"},{"g":"σκέφτομαι","e":"to think"},{"g":"σκηνοθέτης, ο/η","e":"director"},{"g":"σκληρ-ός, -ή, -ό","e":"hard, stiff"},{"g":"σκύλος, ο","e":"dog"},{"g":"σκόρδο, το","e":"garlic"},{"g":"σκουπίζω","e":"to wipe, to sweep"},{"g":"σοβαρ-ός, -ή, -ό","e":"serious"},{"g":"σούπα, η","e":"soup"},{"g":"σπάζω","e":"to smash, to break"},{"g":"σπάνια","e":"rarely, seldom"},{"g":"σπουδάζω","e":"to study"},{"g":"σπουδές, οι","e":"studies"},{"g":"σταθμός, ο","e":"station"},{"g":"σταματάω, -ώ","e":"to stop"},{"g":"στάση λεωφορείου, η","e":"bus stop"},{"g":"στέλνω","e":"to send"},{"g":"στεναχωρημέν-ος, -η, -ο","e":"sad, unhappy, depressed"},{"g":"στεν-ός, -ή, -ό","e":"narrow, tight"},{"g":"στιγμή, η","e":"moment"},{"g":"στόμα, το","e":"mouth"},{"g":"στομάχι, το","e":"stomach"},{"g":"στρώνω","e":"to lay, to set"},{"g":"συγκάτοικος, ο/η","e":"roommate"},{"g":"συγκρίνω","e":"to compare"},{"g":"συγγνώμη, η","e":"apology"},{"g":"Συγγνώμη!","e":"I'm sorry!"},{"g":"συγχαρητήρια, τα","e":"congratulations"},{"g":"σύγχρον-ος, -η, -ο","e":"modern, contemporary"},{"g":"συζητάω, -ώ","e":"to discuss"},{"g":"συζήτηση, η","e":"conversation, discussion"},{"g":"συλλέγω","e":"to collect"},{"g":"συμβουλή, η","e":"advice"},{"g":"συμπαθώ","e":"to like"},{"g":"συμπαθητικ-ός, -ή, -ό","e":"nice, charming"},{"g":"συμφωνώ","e":"to agree"},{"g":"συναντάω, -ώ","e":"to meet, to come across"},{"g":"συνάντηση, η","e":"meeting"},{"g":"συναυλία, η","e":"concert"},{"g":"συνεχίζω","e":"to continue"},{"g":"συνέντευξη, η","e":"interview"},{"g":"συνήθεια, η","e":"habit"},{"g":"συνήθως","e":"usually"},{"g":"συνθέτης, ο/η","e":"composer"},{"g":"συνταγή, η","e":"recipe"},{"g":"σύντομα","e":"soon, shortly"},{"g":"σύντομ-ος, -η, -ο","e":"short, brief"},{"g":"συσκευή, η","e":"device, appliance"},{"g":"συστήνω","e":"to introduce, to recommend"},{"g":"συχν-ός, -ή, -ό","e":"often, frequent"},{"g":"σχεδιάζω","e":"to draw, to design"},{"g":"σχεδόν","e":"almost"},{"g":"σχολείο, το / σχολή, η","e":"school"},{"g":"σώμα, το","e":"body"},{"g":"σωστ-ός, -ή, -ό","e":"right, correct"},{"g":"ταβέρνα, η","e":"tavern"},{"g":"ταινία, η","e":"movie, film"},{"g":"ταιριάζω","e":"to fit, to match, to suit"},{"g":"τάξη, η","e":"classroom"},{"g":"ταξί, το","e":"taxi, cab"},{"g":"ταξιδεύω","e":"to travel"},{"g":"ταξίδι, το","e":"travel, journey, trip"},{"g":"ταχυδρομείο, το","e":"post office"},{"g":"τελευταί-ος, -α, -ο","e":"last, final"},{"g":"τέλεια","e":"perfect"},{"g":"τελειώνω","e":"to end, to finish"},{"g":"τελικά","e":"finally, after all"},{"g":"τέλος, το","e":"end"},{"g":"τένις, το","e":"tennis"},{"g":"τέσσερις, -α","e":"four"},{"g":"Τετάρτη, η","e":"Wednesday"},{"g":"τέτοι-ος, -α, -ο","e":"such"},{"g":"τέχνη, η","e":"art"},{"g":"τζάκι, το","e":"fireplace"},{"g":"τηγάνι, το","e":"pan"},{"g":"τηλεόραση, η","e":"television"},{"g":"τηλεφώνημα, το","e":"phonecall"},{"g":"τηλέφωνο, το","e":"telephone, phone"},{"g":"τηλεφωνώ","e":"to call, to phone"},{"g":"τι","e":"what"},{"g":"τιμή, η","e":"price"},{"g":"τίποτα","e":"nothing"},{"g":"τόνος, ο","e":"accent mark"},{"g":"τόπος, ο","e":"place, area"},{"g":"τουλάχιστον","e":"at least"},{"g":"τουρίστας, ο / τουρίστρια, η","e":"tourist"},{"g":"τούρτα, η","e":"birthday cake"},{"g":"τραγουδάω, -ώ","e":"to sing"},{"g":"τραγούδι, το","e":"song"},{"g":"τρέχω","e":"to run"},{"g":"τριάντα","e":"thirty"},{"g":"Τρίτη, η","e":"Tuesday"},{"g":"τρόπος, ο","e":"way, manner"},{"g":"τροφή, η","e":"food"},{"g":"τρυφερ-ός, -ή, -ό","e":"tender, gentle"},{"g":"τρώω","e":"to eat"},{"g":"τύπος, ο","e":"type, kind"},{"g":"τυρί, το","e":"cheese"},{"g":"τυχερ-ός, -ή, -ό","e":"lucky"},{"g":"τώρα","e":"now"},{"g":"υγεία, η","e":"health"},{"g":"υπάλληλος, ο/η","e":"employee"},{"g":"υπάρχει","e":"there is"},{"g":"υπάρχω","e":"to exist, to be"},{"g":"υπέροχ-ος, -η, -ο","e":"marvellous, wonderful"},{"g":"υπνοδωμάτιο, το","e":"bedroom"},{"g":"υπολογιστής, ο","e":"computer"},{"g":"ύπνος, ο","e":"sleep"},{"g":"ύστερα","e":"after, then"},{"g":"ύφασμα, το","e":"cloth, fabric"},{"g":"φαγητό, το","e":"food"},{"g":"φαίνομαι","e":"to seem"},{"g":"φάκελος, ο","e":"envelope"},{"g":"φαρμακείο, το","e":"pharmacy"},{"g":"φάρμακο, το","e":"drug, medicine"},{"g":"φέρνω","e":"to bring"},{"g":"φεστιβάλ, το","e":"festival"},{"g":"φέτος","e":"this year"},{"g":"φεύγω","e":"to leave"},{"g":"φθην-ός, -ή, -ό","e":"cheap"},{"g":"φθινόπωρο, το","e":"autumn"},{"g":"φιλάω, -ώ","e":"to kiss"},{"g":"φιλί, το","e":"kiss"},{"g":"φιλικ-ός, -ή, -ό","e":"friendly"},{"g":"φίλος, ο / φίλη, η","e":"friend"},{"g":"φοβάμαι","e":"to be afraid of, to fear"},{"g":"φοιτητής, ο / φοιτήτρια, η","e":"student"},{"g":"φοράω, -ώ","e":"to wear"},{"g":"φόρεμα, το","e":"dress"},{"g":"φόρμα, η","e":"tracksuit"},{"g":"φούρνος, ο","e":"oven"},{"g":"φούστα, η","e":"skirt"},{"g":"φράση, η","e":"phrase"},{"g":"φροντίζω","e":"to take care of"},{"g":"φρούτο, το","e":"fruit"},{"g":"φτάνω","e":"to arrive, to reach"},{"g":"φυτό, το","e":"plant"},{"g":"φύση, η","e":"nature"},{"g":"φυσικά","e":"of course, certainly"},{"g":"φωτιά, η","e":"fire"},{"g":"φωτιστικό, το","e":"lamp"},{"g":"φωτογραφία, η","e":"picture, photo"},{"g":"χαιρομαι","e":"to be glad"},{"g":"χαλί, το","e":"carpet"},{"g":"χαλάω, -ώ","e":"to break down"},{"g":"χαμηλ-ός, -ή, -ό","e":"short, low"},{"g":"χάνω","e":"to lose, to miss"},{"g":"χαμόγελο, το","e":"smile"},{"g":"χάπι, το","e":"pill"},{"g":"χαρά, η","e":"happiness, joy"},{"g":"χαρακτήρας, ο","e":"character, personality"},{"g":"χαρίζω","e":"to donate, to gift"},{"g":"χαρούμεν-ος, -η, -ο","e":"happy"},{"g":"χάρτης, ο","e":"map"},{"g":"χειμώνας, ο","e":"winter"},{"g":"χέρι, το","e":"hand, arm"},{"g":"χιόνι, το","e":"snow"},{"g":"χιονίζει","e":"it is snowing"},{"g":"χόμπι, το","e":"hobby"},{"g":"χοντρ-ός, -ή, -ό","e":"fat, thick"},{"g":"χορεύω","e":"to dance"},{"g":"χορός, ο","e":"dancing"},{"g":"χρειάζομαι","e":"to need"},{"g":"χρήματα, τα","e":"money"},{"g":"χρησιμοποιώ","e":"to use"},{"g":"Χριστούγεννα, τα","e":"Christmas"},{"g":"χρόνος, ο","e":"time / year"},{"g":"χρονιά, η","e":"year"},{"g":"χρώμα, το","e":"colour"},{"g":"χτες/χθες","e":"yesterday"},{"g":"χυμός, ο","e":"juice"},{"g":"χώρα, η","e":"country"},{"g":"χωριό, το","e":"village"},{"g":"χωρίς","e":"without"},{"g":"χώρος, ο","e":"space, room"},{"g":"ψάρι, το","e":"fish"},{"g":"ψάχνω","e":"to search, to look for"},{"g":"ψέμα, το","e":"lie"},{"g":"ψηλ-ός, -ή, -ό","e":"tall, high"},{"g":"ψιχαλίζει","e":"it drizzles"},{"g":"ψυγείο, το","e":"refrigerator, fridge"},{"g":"ψωμί, το","e":"bread"},{"g":"ψώνια, τα","e":"shopping"},{"g":"ψωνίζω","e":"to shop, to go shopping"},{"g":"ωράριο, το","e":"schedule, working hours"},{"g":"ωστόσο","e":"however"}];

const GLOSSARY = RAW.map((w, i) => ({ id: i, g: w.g, e: w.e }));
const SESSION_SIZE = 20;

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const speak = (text) => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'el-GR';
    utt.rate = 0.82;
    window.speechSynthesis.speak(utt);
  }
};

const LEVELS = ['', '★', '★★', '★★★', '★★★★', '★★★★★'];
const LEVEL_COLORS = ['#e24b4a', '#d85a30', '#ba7517', '#639922', '#1d9e75', '#0f6e56'];

async function fetchWordData(word) {
  const base = word.g.split(',')[0].split('/')[0].split('(')[0].trim();
  const prompt = `Греческое слово для перевода: "${word.g}" (английский: "${word.e}").

Верни JSON строго для слова "${base}":
{"ru":"перевод на русский 1-4 слова","pron":"произношение латиницей, ЗАГЛАВНЫЕ=ударный слог, пример [ek-DRO-mi]","ex_gr":"предложение A2 с формой слова ${base}","ex_ru":"перевод на русский"}

Только JSON, ничего лишнего.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await res.json();
  const text = data.content?.map(c => c.text || '').join('') || '';
  const clean = text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

export default function App() {
  const [progress, setProgress] = useState({});
  const [cache, setCache] = useState({});
  const [mode, setMode] = useState('all');
  const [queue, setQueue] = useState([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ known: 0, unknown: 0 });
  const [storageReady, setStorageReady] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [sessionDone, setSessionDone] = useState(false);
  const cacheRef = useRef({});
  const progressRef = useRef({});

  useEffect(() => {
    try {
      const pr = localStorage.getItem('vt_progress');
      const ca = localStorage.getItem('vt_cache');
      const p = pr ? JSON.parse(pr) : {};
      const c = ca ? JSON.parse(ca) : {};
      progressRef.current = p;
      cacheRef.current = c;
      setProgress(p);
      setCache(c);
    } catch {}
    setStorageReady(true);
  }, []);

  const saveProgress = useCallback(async (p) => {
    progressRef.current = p;
    setProgress(p);
    try { localStorage.setItem('vt_progress', JSON.stringify(p)); } catch {}
  }, []);

  const saveCache = useCallback(async (c) => {
    cacheRef.current = c;
    setCache(c);
    try { localStorage.setItem('vt_cache', JSON.stringify(c)); } catch {}
  }, []);

  const buildQueue = useCallback((m, p) => {
    let pool = [...GLOSSARY];
    if (m === 'weak') pool = GLOSSARY.filter(w => !p[w.id] || (p[w.id].level || 0) <= 2);
    else if (m === 'new') pool = GLOSSARY.filter(w => !p[w.id]);
    else if (m === 'known') pool = GLOSSARY.filter(w => p[w.id] && (p[w.id].level || 0) >= 3);
    if (pool.length === 0) pool = [...GLOSSARY];
    return shuffle(pool).slice(0, SESSION_SIZE);
  }, []);

  const startSession = useCallback((m) => {
    const q = buildQueue(m, progressRef.current);
    setQueue(q);
    setIdx(0);
    setRevealed(false);
    setCardData(null);
    setStats({ known: 0, unknown: 0 });
    setSessionDone(false);
    setShowInfo(false);
  }, [buildQueue]);

  useEffect(() => {
    if (storageReady) startSession(mode);
  }, [storageReady, mode]);

  const currentWord = queue[idx] || null;

  const fetchingForId = useRef(null);

  const doFetch = useCallback((word, forceRefresh) => {
    if (!word) return;
    setRevealed(false);
    setCardData(null);
    setShowInfo(false);
    setLoading(true);
    fetchingForId.current = word.id;
    const key = String(word.id);
    if (!forceRefresh && cacheRef.current[key]) {
      setCardData(cacheRef.current[key]);
      setLoading(false);
      return;
    }
    fetchWordData(word).then(data => {
      if (fetchingForId.current !== word.id) return;
      setCardData(data);
      const newCache = { ...cacheRef.current, [key]: data };
      saveCache(newCache);
    }).catch(() => {
      if (fetchingForId.current !== word.id) return;
      setCardData({ ru: word.e, pron: '—', ex_gr: '', ex_ru: '' });
    }).finally(() => {
      if (fetchingForId.current === word.id) setLoading(false);
    });
  }, [saveCache]);

  useEffect(() => {
    doFetch(currentWord, false);
  }, [currentWord?.id]);

  const refreshCard = useCallback(() => {
    if (currentWord) doFetch(currentWord, true);
  }, [currentWord, doFetch]);

  const advance = useCallback((knew) => {
    const word = currentWord;
    const p = { ...progressRef.current };
    const cur = p[word.id] || { level: 0, seen: 0 };
    const newLevel = knew ? Math.min(5, cur.level + 1) : Math.max(0, cur.level - 1);
    p[word.id] = { level: newLevel, seen: cur.seen + 1, last: Date.now() };
    saveProgress(p);

    const newStats = { known: stats.known + (knew ? 1 : 0), unknown: stats.unknown + (!knew ? 1 : 0) };
    setStats(newStats);

    if (idx + 1 >= queue.length) {
      setSessionDone(true);
    } else {
      setIdx(i => i + 1);
    }
  }, [currentWord, idx, queue.length, stats, saveProgress]);

  const totalSeen = Object.keys(progress).length;
  const totalKnown = Object.values(progress).filter(p => (p.level || 0) >= 3).length;
  const weakCount = GLOSSARY.filter(w => !progress[w.id] || (progress[w.id].level || 0) <= 2).length;

  const wordLevel = currentWord && progress[currentWord.id] ? progress[currentWord.id].level || 0 : 0;

  const btnStyle = (active, color) => ({
    padding: '6px 14px',
    borderRadius: 'var(--border-radius-md)',
    border: active ? `1.5px solid ${color}` : '0.5px solid var(--color-border-tertiary)',
    background: active ? `${color}22` : 'transparent',
    color: active ? color : 'var(--color-text-secondary)',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: active ? 500 : 400,
    transition: 'all .15s'
  });

  if (!storageReady) return <div style={{ padding: '2rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>Загрузка...</div>;

  if (sessionDone) return (
    <div style={{ padding: '1.5rem 1rem', maxWidth: 480, margin: '0 auto' }}>
      <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8, color: 'var(--color-text-primary)' }}>Сессия завершена</h2>
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <div style={{ flex: 1, background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-md)', padding: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 500, color: '#1d9e75' }}>{stats.known}</div>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Знаю</div>
        </div>
        <div style={{ flex: 1, background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-md)', padding: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 500, color: '#e24b4a' }}>{stats.unknown}</div>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Не знаю</div>
        </div>
        <div style={{ flex: 1, background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-md)', padding: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 500, color: 'var(--color-text-primary)' }}>{totalKnown}</div>
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Освоено</div>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
          Прогресс: {totalSeen} / {GLOSSARY.length} слов изучено · Слабых: {weakCount}
        </div>
        <div style={{ height: 6, background: 'var(--color-background-secondary)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${Math.round(totalKnown / GLOSSARY.length * 100)}%`, background: '#1d9e75', borderRadius: 3, transition: 'width .4s' }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button onClick={() => startSession(mode)} style={{ padding: '8px 20px', borderRadius: 'var(--border-radius-md)', border: '0.5px solid var(--color-border-secondary)', background: 'var(--color-background-primary)', cursor: 'pointer', fontSize: 14 }}>
          Ещё раз
        </button>
        {['all','weak','new','known'].map(m => (
          <button key={m} onClick={() => { setMode(m); startSession(m); }}
            style={btnStyle(mode === m, '#1d9e75')}>
            {{ all: 'Все', weak: 'Слабые', new: 'Новые', known: 'Знаю' }[m]}
          </button>
        ))}
      </div>
    </div>
  );

  if (!currentWord) return null;

  const sessionProgress = idx / queue.length;

  return (
    <div style={{ padding: '1rem', maxWidth: 520, margin: '0 auto', fontFamily: 'var(--font-sans)' }}>
      <h2 className="sr-only">Тренажёр греческих слов — KLIK A2</h2>

      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ flex: 1, height: 4, background: 'var(--color-background-secondary)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${Math.round(sessionProgress * 100)}%`, background: '#1d9e75', borderRadius: 2, transition: 'width .3s' }} />
        </div>
        <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{idx + 1} / {queue.length}</span>
      </div>

      {/* Mode selector */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
        {[
          { k: 'all', label: `Все (${GLOSSARY.length})` },
          { k: 'weak', label: `Слабые (${weakCount})` },
          { k: 'new', label: `Новые (${GLOSSARY.length - totalSeen})` },
          { k: 'known', label: `Знаю (${totalKnown})` }
        ].map(({ k, label }) => (
          <button key={k} onClick={() => { setMode(k); startSession(k); }}
            style={btnStyle(mode === k, '#1d9e75')}>
            {label}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div style={{
        background: 'var(--color-background-primary)',
        border: '0.5px solid var(--color-border-tertiary)',
        borderRadius: 'var(--border-radius-lg)',
        padding: '1.5rem',
        marginBottom: 12,
        minHeight: 280
      }}>
        {/* Word level indicator */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontSize: 11, color: LEVEL_COLORS[wordLevel], fontWeight: 500 }}>
            {LEVELS[wordLevel] || 'Новое'}
          </span>
          <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>
            {progress[currentWord.id] ? `Показано: ${progress[currentWord.id].seen}` : 'Первый раз'}
          </span>
        </div>

        {/* Greek word — BIG */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 32, fontWeight: 500, color: 'var(--color-text-primary)', fontFamily: 'serif', lineHeight: 1.2 }}>
              {currentWord.g}
            </span>
            <button onClick={() => speak(currentWord.g.split(',')[0].split('/')[0].trim())}
              title="Произнести"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--color-text-secondary)', fontSize: 16 }}>
              🔊
            </button>
          </div>
        </div>

        {/* Pronunciation */}
        {loading ? (
          <div style={{ fontSize: 13, color: 'var(--color-text-tertiary)', marginBottom: 12 }}>Загрузка...</div>
        ) : cardData ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#1d9e75', letterSpacing: '0.02em' }}>
              {cardData.pron}
            </span>
            <button onClick={refreshCard} title="Данные неверны — загрузить заново"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-tertiary)', fontSize: 11, padding: '2px 5px', borderRadius: 4, border: '0.5px solid var(--color-border-tertiary)' }}>
              ↺
            </button>
          </div>
        ) : null}

        {/* Reveal button or answer */}
        {!revealed ? (
          <button onClick={() => setRevealed(true)}
            style={{
              width: '100%', padding: '10px', borderRadius: 'var(--border-radius-md)',
              border: '0.5px solid var(--color-border-secondary)',
              background: 'var(--color-background-secondary)',
              cursor: 'pointer', fontSize: 14, color: 'var(--color-text-secondary)'
            }}>
            Показать перевод
          </button>
        ) : cardData ? (
          <div>
            {/* Russian translation */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginBottom: 4 }}>ПЕРЕВОД</div>
              <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--color-text-primary)' }}>
                {cardData.ru}
              </div>
              <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 2 }}>
                {currentWord.e}
              </div>
            </div>

            {/* Example sentence */}
            {cardData.ex_gr && (
              <div style={{
                background: 'var(--color-background-secondary)',
                borderRadius: 'var(--border-radius-md)',
                padding: '10px 12px',
                borderLeft: '2px solid #1d9e75'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: 'var(--color-text-primary)', marginBottom: 3, fontFamily: 'serif' }}>
                      {cardData.ex_gr}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                      {cardData.ex_ru}
                    </div>
                  </div>
                  <button onClick={() => speak(cardData.ex_gr)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-secondary)', fontSize: 13, padding: 0, flexShrink: 0 }}>
                    🔊
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* Know / Don't know buttons */}
      {revealed && (
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => advance(false)}
            style={{
              flex: 1, padding: '12px', borderRadius: 'var(--border-radius-md)',
              border: '0.5px solid #e24b4a', background: '#e24b4a11',
              color: '#e24b4a', cursor: 'pointer', fontSize: 15, fontWeight: 500
            }}>
            Не знаю
          </button>
          <button onClick={() => advance(true)}
            style={{
              flex: 1, padding: '12px', borderRadius: 'var(--border-radius-md)',
              border: '0.5px solid #1d9e75', background: '#1d9e7511',
              color: '#1d9e75', cursor: 'pointer', fontSize: 15, fontWeight: 500
            }}>
            Знаю
          </button>
        </div>
      )}

      {/* Session stats */}
      <div style={{ marginTop: 14, display: 'flex', gap: 16, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
        <span>Знаю: <strong style={{ color: '#1d9e75' }}>{stats.known}</strong></span>
        <span>Не знаю: <strong style={{ color: '#e24b4a' }}>{stats.unknown}</strong></span>
        <span style={{ marginLeft: 'auto' }}>Всего освоено: {totalKnown} / {GLOSSARY.length}</span>
      </div>
    </div>
  );
}

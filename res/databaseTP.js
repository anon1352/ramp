var database={ // а вы тоже храните базы данных в объектах js?
	e1:{
		title:'Twin Peaks',
		subtitle:'Братья Вершинские',
		description:'Перед зрителями сериала открывается жизнь небольшого провинциального американского городка, населённого дружными, наивными и немного эксцентричными людьми.',
		poster:'tp1.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:5.71,kp:6.58},
		status:false
	},
	e2:{
		title:'Twin Peaks',
		subtitle:'Экстремумы-близнецы',
		description:'В ходе расследования перед агентом Купером, шерифом Труманом и его помощниками проходят разные жители Твин Пикс. Постепенно зритель открывает для себя тёмную и страшную сторону жизни обитателей, на первый взгляд, тихого и мирного городка.',
		poster:'tp2.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:5.41,kp:6.07},
		status:false
	},
	e3:{
		title:'1 girl 2 peaks',
		subtitle:'Сиамская гора',
		description:'В городке Твин Пикс ранним утром обнаружено завернутое в зимний целлофан обнаженное тело молодой девушки по имени Лора Палмер…',
		poster:'tp3.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:7.81,kp:7.78},
		status:false
	},
	e4:{
		title:'Peak Twins',
		subtitle:'Тупик',
		description:'В городке Твин Пикс, расположенном в северо-восточной части штата Вашингтон, неподалеку от границы с Канадой, происходит загадочное и жестокое убийство старшеклассницы Лоры Палмер (Шерил Ли) — ее обнаженное тело, завернутое в полиэтилен, находят на берегу озера. Расследовать преступление в Твин Пикс приезжает специальный агент ФБР Дейл Купер (Кайл МакЛахлан).',
		poster:'tp4.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'nl',
		budget:{spent:0,gross:0},
		rating:{imdb:5.61,kp:7.61},
		status:false
	},
	e5:{
		title:'Gemini hills',
		subtitle:'Два полушария',
		description:'Линч не был бы Линчем, если бы кроме социальной критики в его сериале "Твин Пикс" не было бы своеобразного юмора и таинственной, мистической подоплеки детективной истории.',
		poster:'tp5.png',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:6.81,kp:7.71},
		status:false
	},
	e6:{
		title:'Tmin Cakes',
		subtitle:'Братские полужопия',
		description:'Не только традиционно используемые в искусстве символы — лес, вода, огонь, но и самые обычные вещи, такие как пончики или обожаемый Купером кофе, приобретают в фильме налет мистики и загадочности.',
		poster:'tp6.png',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'se',
		budget:{spent:0,gross:0},
		rating:{imdb:8.01,kp:6.95},
		status:false
	},
	e7:{
		title:'Twerk Pix',
		subtitle:'Однояйцевый твикс',
		description:'В 1991 году сериал "Твин Пикс" был удостоен трех "Золотых глобусов", а кроме того, в разные годы многократно становился номинантом и обладателем различных премий и званий.',
		poster:'tp7.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'jp',
		budget:{spent:0,gross:0},
		rating:{imdb:6.91,kp:6.71},
		status:false
	},
	e8:{
		title:'Dwin Bricks',
		subtitle:'Крэкс фэкс пэкс',
		description:'Высокоскоростной интернет, Кондиционер, Сейф, Холодильник, Кабельное / Спутниковое телевидение, Фильмы в номере, Кухня, Микроволновая печь, Телевизор, Проигрыватель компакт-дисков, Проигрыватель дисков DVD, Письменный стол, Доступ в интернет (беспроводной), Полотенца, Душ, Детская кроватка ',
		poster:'tp8.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'gb',
		budget:{spent:0,gross:0},
		rating:{imdb:7.21,kp:6.84},
		status:false
	},
	e9:{
		title:'Blin Twix',
		subtitle:'Симметричные холмики',
		description:'<a href="http://0chan.ru/" target="_blank">Купить</a> чугунные двери Челябинск',
		poster:'tp9.jpeg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:6.71,kp:6.12},
		status:false
	},
	e10:{
		title:'Boku no Lora Palmer',
		subtitle:'Двойной оргазм',
		description:'В Турции найден редкий артефакт эпохи неолита.',
		poster:'tp10.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'fr',
		budget:{spent:0,gross:0},
		rating:{imdb:6.81,kp:6.56},
		status:false
	},
	e11:{
		title:'Tweet Slicks',
		subtitle:'Гомоморфизм холмов Клейна',
		description:'Мировое дерево. Универсальные знаковые комплексы, Том 2',
		poster:'tp11.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:6.71,kp:6.12},
		status:false
	},
	e12:{
		title:'Swim Dicks',
		subtitle:'Скрещённые струи',
		description:'Нередко встречаются двойные горы (с двумя вершинами) или же две отдельные горы, часто противопоставленные друг другу (ср. Белая гора и Чёрная гора у лужицких славян и соответственно Белобог и Чернобог или Святые горы и Лысые горы, местопребывание соответственно добрых и злых духов: ср. Святогор, но Змей Горыныч. Иногда речь идёт об одной Горе, на которой живут брат и сестра, вступающие в брак и дающие начало человеческому роду (ср. древнекитайский миф о Фу-си и Нюй-ва на горах Кунь-лунь). Эта тема божественного инцеста (часто между близнецами) связывается с двумя горами или с одной Горой (ср. тему, приуроченную к «спаренным» мировым деревьям).',
		poster:'tp12.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:6.71,kp:6.12},
		status:false
	},
	e13:{
		title:'Clean Sticks',
		subtitle:'Бигеминальные бугры',
		description:'Нужно представить? что на равнине две возвышенности. Высота первой - 135м, а второй высота - 500м.',
		poster:'tp13.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:6.71,kp:6.12},
		status:false
	},
	e14:{
		title:'Double Eaks',
		subtitle:'Двойное проникновение',
		description:'ападнее р. Суры выделяются две возвышенности – Сурско-Мокшанская, где проходит водораздел Суры, Мокши и Хопра, и Керенско-Чембарская с водоразделом Мокши, Хопра и правых притоков Цны. Абсолютные высоты возвышенности 270–300 м. Более 300 рек и речек разбивают поверхность возвышенности на отд. междуречья – эрозионные останцы с развитой овражно-балочной сетью. Овражная эрозия резко усилилась в связи с вырубкой лесов в послевоен. годы.',
		poster:'tp14.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:6.71,kp:6.12},
		status:false
	},
	e15:{
		title:'Jin Geeks',
		subtitle:'Двусмысленное увеличение',
		description:'Два Близнеца" в Авиастроительном районе! От "Бахетле" на ул. Ленинградская до Дома 6 мин! На участке три построения из сруба! Дом 250 кв.м., Баня 60 кв.м., Беседка 40 кв.м! В беседке каменный мангал! По всей территории рассажены голубые ели! Парковка на 8 машин! В Доме 4 спальные комнаты, Банкетный зал на 40 чел, Спальных мест 17, Караоке! Танцпол! Светомузыка! БИЛЬЯРД!!! БАССЕЙН!!!Будем рады Вам!!! ',
		poster:'tp15.jpg',
		year:1990,out:true,
		duration:9001,
		genre:['horror','thriller','coolstory'],
		country:'us',
		budget:{spent:0,gross:0},
		rating:{imdb:6.71,kp:6.12},
		status:false
	},
	e179:{
		title:'R.O.D リード・オア・ダイ (OVA)',
		subtitle:'Прочти или умри',
		description:'Похоже, кто-то пытается заполучить несколько редких текстов за подписью Бетховена - и на стороне таинственного похитителя выступает ряд весьма известных леди и джентльменов мировой истории. Но только спокойствие! Молодая школьная учительница Ёмико Ридман, обладательница сверхъестественных способностей и консультант спецподразделения по борьбе с потусторонними силами, преследует именитых злоумышленников по всему миру - от улочек Токио, до отмелей Ганга и статуи Свободы в Нью-Йорке!',
		poster:'ROD.jpg',
		year:2002,out:true,
		duration:99,
		genre:['action','adventure','mystic','scifi'],
		country:'jp',
		rating:{mal:7.78},
		status:false
	},
	e67:{
		title:'Perfect Blue パーフェクト・ブルー',
		subtitle:'Идеальная синева',
		description:'Молодая поп-певица Мима Киригоэ пытается перейти из мира музыки в киноиндустрию и прославиться как актриса, но, похоже, не всем её поклонникам понравилось такое решение. Начались странные телефонные звонки и факсы, потом был получен конверт со взрывчаткой. А плюс к тому в Интернете обнаружилась страничка с якобы дневником Мимы. Но певица решила идти своим путем во что бы то ни стало, несмотря на угрозы неизвестного. Вот только преследования и новые правила жизни просто сводят её с ума.',
		poster:'Perfect Blue.jpg',
		year:1997,out:true,
		duration:81,
		genre:['animated','horror'],
		country:'jp',
		budget:{spent:30000,gross:99389},
		rating:{mal:8.22},
		status:false
	},
	e112:{
		title:'Busanhaeng 부산행',
		subtitle:'В Бусане',
		description:'У маленькой Су-ан день рождения. Девочка живет с отцом в Сеуле и очень хочет отправиться к маме в Пусан. По дороге случается непредвиденное, и на страну обрушивается загадочный вирус. Пассажирам поезда в Пусан — единственного города, отразившего атаки вируса, придется бороться за выживание. 442 километра в пути. Добро пожаловать на борт и помните — в этой гонке недостаточно выжить, чтобы остаться человеком.',
		poster:'Busanhaeng.jpg',
		year:2016,out:true,
		duration:118,
		genre:['horror','thriller','action'],
		country:'kr',
		budget:{spent:8896792,gross:0},
		rating:{imdb:7.6,kp:7.09},
		status:false
	}
};
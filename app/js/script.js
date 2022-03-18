
const lettersPattern = /[a-z]/; // /^[a-zA-Z][a-zA-Z0-9]*$/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount)
let words = [
	'abaca',
	'blesa',
	'bleus',
	'bleui',
	'bleue',
	'bletz',
	'blets',
	'blese',
	'blemi',
	'blini',
	'bleme',
	'bleds',
	'blaze',
	'blase',
	'blasa',
	'blaps',
	'blind',
	'blitz',
	'blame',
	'blush',
	'bocal',
	'bobos',
	'bobet',
	'bobby',
	'blute',
	'bluta',
	'bluff',
	'block',
	'bluet',
	'blues',
	'blots',
	'bloom',
	'blond',
	'blogs',
	'blocs',
	'blanc',
	'blama',
	'bocks',
	'biset',
	'bisse',
	'bissa',
	'bisou',
	'bison',
	'bisoc',
	'bisez',
	'bises',
	'bitas',
	'biser',
	'bisee',
	'bisat',
	'bisas',
	'bisai',
	'birrs',
	'birbe',
	'bitai',
	'bitat',
	'blair',
	'bitus',
	'blaff',
	'black',
	'bizut',
	'bizou',
	'bizet',
	'biwas',
	'bitue',
	'bitee',
	'bittu',
	'bitte',
	'bitta',
	'bitos',
	'bitez',
	'bites',
	'biter',
	'boche',
	'bodhi',
	'bipez',
	'boree',
	'borts',
	'borne',
	'borna',
	'borin',
	'borie',
	'bores',
	'bords',
	'boson',
	'bordj',
	'borde',
	'borda',
	'borax',
	'boras',
	'boots',
	'bosco',
	'bossa',
	'books',
	'boues',
	'boume',
	'bouma',
	'boule',
	'boula',
	'bouif',
	'bouge',
	'bouee',
	'bosse',
	'boude',
	'bouda',
	'boucs',
	'botte',
	'botta',
	'botes',
	'bossu',
	'booms',
	'bonze',
	'bodys',
	'boiar',
	'boita',
	'boise',
	'boisa',
	'boire',
	'boira',
	'boide',
	'bogue',
	'boive',
	'bogua',
	'bogie',
	'bogey',
	'boges',
	'boeuf',
	'boete',
	'boers',
	'boite',
	'bokit',
	'bonus',
	'bondi',
	'bonte',
	'bonne',
	'bonis',
	'bonif',
	'bongo',
	'bonds',
	'bonde',
	'boldo',
	'bonda',
	'bomes',
	'bomee',
	'bombe',
	'bomba',
	'bolet',
	'bolee',
	'bique',
	'bipes',
	'boure',
	'beige',
	'beler',
	'belee',
	'belat',
	'belas',
	'belai',
	'bekes',
	'beiez',
	'belez',
	'behai',
	'begus',
	'begum',
	'begue',
	'beera',
	'beent',
	'beles',
	'belga',
	'bedes',
	'benir',
	'berca',
	'beons',
	'benne',
	'benji',
	'benit',
	'benis',
	'benin',
	'belge',
	'benie',
	'benet',
	'benef',
	'bemol',
	'bemba',
	'belon',
	'belle',
	'bedon',
	'becte',
	'beret',
	'bavat',
	'bayas',
	'bayai',
	'bavez',
	'baves',
	'baver',
	'bavee',
	'bavas',
	'bayer',
	'bavai',
	'baume',
	'bauge',
	'bauds',
	'battu',
	'batte',
	'baton',
	'bayat',
	'bayes',
	'becta',
	'beats',
	'becot',
	'beche',
	'becha',
	'bebes',
	'beaux',
	'beauf',
	'beate',
	'bayez',
	'beant',
	'beait',
	'beais',
	'bazou',
	'bazar',
	'bayou',
	'bayle',
	'berce',
	'berge',
	'biper',
	'bilas',
	'bilie',
	'bilez',
	'biles',
	'biler',
	'bilee',
	'bilat',
	'bilan',
	'bille',
	'bilai',
	'bijou',
	'bigue',
	'bigre',
	'bigot',
	'bigor',
	'billa',
	'bills',
	'bigla',
	'binon',
	'bipee',
	'bipat',
	'bipas',
	'bipai',
	'biote',
	'biome',
	'bingo',
	'bimbo',
	'binez',
	'bines',
	'biner',
	'binee',
	'binat',
	'binas',
	'binai',
	'bigle',
	'biges',
	'berme',
	'betas',
	'beure',
	'bette',
	'beton',
	'betes',
	'betel',
	'betee',
	'beset',
	'beurs',
	'besef',
	'besas',
	'beryx',
	'beryl',
	'berot',
	'berne',
	'berna',
	'beurk',
	'bevue',
	'biffe',
	'bides',
	'biffa',
	'biere',
	'biens',
	'biefs',
	'bidon',
	'bidet',
	'bicot',
	'bezef',
	'biche',
	'bicha',
	'bibus',
	'bible',
	'bibis',
	'biaxe',
	'biais',
	'boums',
	'bourg',
	'batis',
	'calle',
	'calot',
	'calos',
	'calmi',
	'calme',
	'calma',
	'calls',
	'calla',
	'calte',
	'calin',
	'calfs',
	'calez',
	'cales',
	'caler',
	'calee',
	'calta',
	'calus',
	'calas',
	'camez',
	'canai',
	'camus',
	'camps',
	'campo',
	'campe',
	'campa',
	'cames',
	'calva',
	'camer',
	'camee',
	'cambe',
	'camba',
	'camat',
	'camas',
	'camai',
	'calat',
	'calao',
	'canar',
	'cadre',
	'cagee',
	'cafte',
	'cafta',
	'cafre',
	'cafes',
	'caduc',
	'cadra',
	'caget',
	'cador',
	'cadis',
	'cadet',
	'cades',
	'caddy',
	'cache',
	'cacha',
	'cages',
	'cagna',
	'calai',
	'cairn',
	'cakti',
	'cakta',
	'cakes',
	'cajun',
	'cajou',
	'cajet',
	'caion',
	'cagne',
	'caieu',
	'caids',
	'cahot',
	'cague',
	'cagua',
	'cagou',
	'cagot',
	'canal',
	'canas',
	'cacao',
	'caris',
	'carry',
	'carre',
	'carra',
	'carpe',
	'carne',
	'carme',
	'carie',
	'carte',
	'caria',
	'cargo',
	'carex',
	'caret',
	'carde',
	'carda',
	'carta',
	'carva',
	'caque',
	'casez',
	'catas',
	'caste',
	'casta',
	'casse',
	'cassa',
	'cashs',
	'cases',
	'carvi',
	'caser',
	'casee',
	'casco',
	'casat',
	'casas',
	'casai',
	'carys',
	'carat',
	'caqua',
	'canat',
	'canna',
	'cante',
	'canta',
	'canot',
	'canon',
	'canoe',
	'canne',
	'canin',
	'canus',
	'canif',
	'cange',
	'canez',
	'canes',
	'caner',
	'canee',
	'candi',
	'cants',
	'canut',
	'capte',
	'capez',
	'capta',
	'capre',
	'cappa',
	'capot',
	'capos',
	'capon',
	'capet',
	'caoua',
	'capes',
	'caper',
	'capee',
	'capea',
	'capat',
	'capas',
	'capai',
	'cacas',
	'cabus',
	'bours',
	'bride',
	'brion',
	'brins',
	'brime',
	'brima',
	'briks',
	'bries',
	'brida',
	'brisa',
	'brick',
	'bribe',
	'breve',
	'brent',
	'brens',
	'breme',
	'brios',
	'brise',
	'brela',
	'broum',
	'bruir',
	'bruie',
	'broye',
	'broya',
	'brout',
	'brous',
	'broue',
	'brize',
	'brook',
	'brome',
	'brols',
	'broie',
	'brode',
	'broda',
	'brocs',
	'brele',
	'brefs',
	'bruit',
	'boxas',
	'boxon',
	'boxez',
	'boxes',
	'boxer',
	'boxee',
	'boxat',
	'boxai',
	'brada',
	'bowal',
	'bovin',
	'bouts',
	'boute',
	'bouta',
	'bouse',
	'bousa',
	'boyau',
	'brade',
	'brede',
	'brava',
	'break',
	'braye',
	'braya',
	'bravo',
	'bravi',
	'brave',
	'brase',
	'braie',
	'brasa',
	'brans',
	'brand',
	'brame',
	'brama',
	'brait',
	'brais',
	'bruis',
	'brula',
	'cabri',
	'busez',
	'butat',
	'butas',
	'butai',
	'buste',
	'busse',
	'bushs',
	'buses',
	'buter',
	'buser',
	'busee',
	'buscs',
	'busat',
	'busas',
	'busai',
	'butee',
	'butes',
	'buron',
	'caban',
	'cabre',
	'cabra',
	'cabot',
	'cable',
	'cabla',
	'cabas',
	'bytes',
	'butez',
	'buvez',
	'buvee',
	'butte',
	'butta',
	'butos',
	'butor',
	'butin',
	'burqa',
	'burne',
	'brule',
	'bucha',
	'bugle',
	'buggy',
	'bugge',
	'bugga',
	'buees',
	'buche',
	'bubon',
	'bugne',
	'bruts',
	'brute',
	'bruns',
	'bruni',
	'brune',
	'brume',
	'bruma',
	'bugna',
	'buire',
	'burle',
	'buqua',
	'burka',
	'burin',
	'burgs',
	'bures',
	'burat',
	'buque',
	'bunas',
	'bulbe',
	'bumes',
	'bulot',
	'bulls',
	'bulle',
	'bulla',
	'bulge',
	'bulbs',
	'batit',
	'batir',
	'abats',
	'alite',
	'aller',
	'allee',
	'allat',
	'allas',
	'allai',
	'alize',
	'alita',
	'alleu',
	'alise',
	'alios',
	'alien',
	'alibi',
	'alias',
	'algue',
	'alles',
	'allez',
	'algie',
	'alpes',
	'aluna',
	'alule',
	'altos',
	'altea',
	'alpin',
	'alpha',
	'alpax',
	'allia',
	'alose',
	'alors',
	'alois',
	'aloes',
	'almee',
	'alloc',
	'allie',
	'algol',
	'algal',
	'aluni',
	'airas',
	'airez',
	'aires',
	'airer',
	'airee',
	'airco',
	'airat',
	'airai',
	'aises',
	'aioli',
	'ainsi',
	'ainou',
	'aines',
	'ainee',
	'aimez',
	'aimes',
	'aisee',
	'aisys',
	'alfas',
	'aleas',
	'aleze',
	'alese',
	'alesa',
	'aleph',
	'alene',
	'alems',
	'aldol',
	'ajonc',
	'aldin',
	'album',
	'akene',
	'akans',
	'ajuts',
	'ajout',
	'ajour',
	'alune',
	'aluns',
	'aimee',
	'andin',
	'angon',
	'angle',
	'anges',
	'aneth',
	'anels',
	'anees',
	'ancre',
	'anier',
	'ancra',
	'anche',
	'anaux',
	'anars',
	'anale',
	'amyle',
	'angor',
	'anils',
	'amusa',
	'anoli',
	'antan',
	'anses',
	'ansee',
	'anons',
	'anone',
	'anona',
	'anode',
	'anima',
	'annee',
	'annal',
	'anjou',
	'anise',
	'anisa',
	'anion',
	'anime',
	'amuse',
	'amure',
	'alvin',
	'ambra',
	'amibe',
	'amers',
	'amere',
	'amene',
	'amena',
	'ambre',
	'ambon',
	'amide',
	'amble',
	'ambla',
	'amati',
	'amant',
	'amans',
	'alyte',
	'alyas',
	'amict',
	'amies',
	'amura',
	'amphi',
	'amuit',
	'amuis',
	'amuir',
	'amuie',
	'ampli',
	'ample',
	'amour',
	'amigo',
	'amont',
	'amome',
	'amoks',
	'ammis',
	'amman',
	'amish',
	'amine',
	'aimer',
	'aimat',
	'antre',
	'acore',
	'actee',
	'actat',
	'actas',
	'actai',
	'acres',
	'acras',
	'acons',
	'actes',
	'acnes',
	'acmes',
	'acini',
	'acier',
	'acide',
	'aches',
	'acter',
	'actez',
	'achat',
	'adieu',
	'adnes',
	'adnee',
	'admit',
	'admis',
	'admet',
	'adire',
	'adent',
	'actif',
	'addax',
	'adavs',
	'adage',
	'adacs',
	'acyle',
	'aculs',
	'actus',
	'acheb',
	'acere',
	'adonc',
	'abime',
	'abots',
	'abord',
	'aboli',
	'abois',
	'aboie',
	'ables',
	'abima',
	'aboya',
	'abies',
	'abeti',
	'abers',
	'abees',
	'abdos',
	'abces',
	'abbes',
	'about',
	'aboye',
	'acera',
	'acces',
	'accus',
	'accul',
	'accru',
	'accro',
	'accot',
	'accon',
	'abyme',
	'abras',
	'abute',
	'abuta',
	'abuse',
	'abusa',
	'abris',
	'abrie',
	'abria',
	'adobe',
	'adons',
	'aimas',
	'ahana',
	'aidai',
	'aiche',
	'aicha',
	'ahuri',
	'ahans',
	'ahane',
	'aguis',
	'aidat',
	'agres',
	'agreg',
	'agree',
	'agrea',
	'agora',
	'agoni',
	'aidas',
	'aidee',
	'agnat',
	'aigue',
	'aimai',
	'aille',
	'ailla',
	'ailes',
	'ailee',
	'aigus',
	'aigri',
	'aider',
	'aigre',
	'aigle',
	'aieux',
	'aieul',
	'aient',
	'aidez',
	'aides',
	'agnel',
	'agite',
	'adora',
	'aerat',
	'afars',
	'afare',
	'aerez',
	'aeres',
	'aerer',
	'aeree',
	'aeras',
	'affin',
	'aerai',
	'aedes',
	'adule',
	'adula',
	'adret',
	'adrar',
	'adore',
	'afats',
	'affut',
	'agita',
	'agent',
	'agira',
	'agios',
	'agile',
	'agies',
	'aghas',
	'agglo',
	'agees',
	'agaca',
	'agave',
	'agate',
	'agape',
	'agami',
	'agame',
	'agada',
	'agace',
	'antes',
	'aorte',
	'batik',
	'babil',
	'bacon',
	'bacle',
	'bacla',
	'bache',
	'bacha',
	'babys',
	'babas',
	'badai',
	'azyme',
	'azurs',
	'azure',
	'azura',
	'azote',
	'azota',
	'bacul',
	'badas',
	'azora',
	'bafra',
	'bagou',
	'bagne',
	'baggy',
	'bagel',
	'bagad',
	'bafre',
	'baffe',
	'badat',
	'baffa',
	'badin',
	'badge',
	'badez',
	'bades',
	'bader',
	'badee',
	'azore',
	'azobe',
	'bague',
	'avoie',
	'avoye',
	'avoya',
	'avoue',
	'avoua',
	'avons',
	'avoir',
	'avive',
	'awacs',
	'aviva',
	'aviso',
	'avise',
	'avisa',
	'avion',
	'avine',
	'avina',
	'avril',
	'awale',
	'azeri',
	'axial',
	'ayons',
	'ayant',
	'axons',
	'axone',
	'axile',
	'axiez',
	'axera',
	'awele',
	'axent',
	'axene',
	'axels',
	'axees',
	'axant',
	'axait',
	'axais',
	'bagua',
	'bahai',
	'aviez',
	'basal',
	'basez',
	'bases',
	'baser',
	'basee',
	'basat',
	'basas',
	'basai',
	'basie',
	'barye',
	'barri',
	'barre',
	'barra',
	'baron',
	'barns',
	'basic',
	'basin',
	'baril',
	'batch',
	'batie',
	'baths',
	'batez',
	'bates',
	'bater',
	'batee',
	'batat',
	'basir',
	'batas',
	'batai',
	'baste',
	'basta',
	'basse',
	'basit',
	'basis',
	'barjo',
	'barge',
	'bahts',
	'balan',
	'bamba',
	'balte',
	'balsa',
	'balle',
	'balla',
	'bales',
	'balai',
	'banat',
	'baise',
	'baisa',
	'bains',
	'baine',
	'baile',
	'baies',
	'bahut',
	'banal',
	'banco',
	'bards',
	'baqua',
	'barde',
	'barda',
	'barbu',
	'barbe',
	'barba',
	'baque',
	'bantu',
	'bancs',
	'banon',
	'banni',
	'banne',
	'banjo',
	'bangs',
	'bande',
	'banda',
	'avili',
	'avide',
	'aouta',
	'aride',
	'armat',
	'armas',
	'armai',
	'arise',
	'arisa',
	'arien',
	'arias',
	'armer',
	'arhat',
	'argus',
	'argue',
	'argua',
	'argot',
	'argon',
	'armee',
	'armes',
	'argas',
	'arret',
	'aryen',
	'arums',
	'artel',
	'arsis',
	'arsin',
	'arroi',
	'arque',
	'armet',
	'arqua',
	'arome',
	'arols',
	'arole',
	'arobe',
	'armon',
	'armez',
	'argol',
	'argan',
	'arzel',
	'apnee',
	'apres',
	'appui',
	'appel',
	'appat',
	'appas',
	'apode',
	'aplat',
	'apura',
	'apion',
	'apiol',
	'apide',
	'aphte',
	'apero',
	'aouts',
	'aoute',
	'aptes',
	'apure',
	'arete',
	'archi',
	'arene',
	'arena',
	'arecs',
	'ardus',
	'ardue',
	'arcon',
	'arche',
	'apyre',
	'arbre',
	'arase',
	'arasa',
	'araks',
	'aracs',
	'arack',
	'arabe',
	'aryle',
	'asana',
	'aveux',
	'aunat',
	'auras',
	'aurai',
	'aunez',
	'aunes',
	'auner',
	'aunee',
	'aunas',
	'aussi',
	'aunai',
	'aulne',
	'aulas',
	'auget',
	'auges',
	'augee',
	'audit',
	'aurez',
	'autan',
	'aucun',
	'avare',
	'avers',
	'avere',
	'avera',
	'avenu',
	'avent',
	'avens',
	'avant',
	'autel',
	'avals',
	'avale',
	'avala',
	'avait',
	'avais',
	'autre',
	'autos',
	'audio',
	'aubin',
	'asdic',
	'asque',
	'assis',
	'assez',
	'asses',
	'assec',
	'assai',
	'asram',
	'aspre',
	'aster',
	'asple',
	'aspis',
	'aspic',
	'aspes',
	'asins',
	'asine',
	'asile',
	'assit',
	'astic',
	'aubes',
	'atoca',
	'atres',
	'atout',
	'atour',
	'atone',
	'atome',
	'atoll',
	'atman',
	'astis',
	'atlas',
	'atipa',
	'athee',
	'atemi',
	'atele',
	'ataca',
	'astre',
	'catch'
	
	
]
let solutionWord = ''

// choose random item from array
const chooseWord = () => {
	let randomItem = Math.floor(Math.random() * (words.length -1)) + 1
	solutionWord = words[randomItem]
	console.log(solutionWord)
}
chooseWord()

// detect the keypress (letter, backspace, enter, other)
document.addEventListener("keydown", (e) => {
	// console.log("keypress: " + e.key);

	let keypress = e.key;

if (currentGuessCount < 7) {
	// if keypress is a string of length 1 and is a letter
	if (keypress.length == 1 && lettersPattern.test(e.key) && currentGuess.dataset.letters.length < 5) {
		//console.log('is letter')
		updateLetters(keypress);
	} else if (e.key == 'Backspace' && currentGuess.dataset.letters != '') {
		deleteFromLetters();
	} else if (e.key == 'Enter' && currentGuess.dataset.letters.length == 5) {
		submitGuess()
	}
}
});

const submitGuess = () => {
	console.log('submit guess')
	for (let i = 0; i<5; i++) {
		// console.log('currentGuessCount = ' + currentGuessCount + ' loop ' + i)
		setTimeout(() => {
			revealTile(i, checkLetter(i));
	}, i * 200);
}
}

const checkIfGuessComplete = (i) => {
	if (i == 4){
		// console.log('guess complete check win :')
		checkWin()
	}
}

const jumpTiles = () => {
	console.log('Jumptiles')
	for (let i = 0; i < 5; i++) {
		setTimeout(() => {
			let currentTile = document.querySelector(
				'#guess' + currentGuessCount + 'Tile' + (i + 1)
				);
			currentTile.classList.add('jump');
	}, i * 200);
	}
}

const checkWin = () => {
	console.log('check win')
	if (solutionWord == currentGuess.dataset.letters) {
		// win
		setTimeout(() => {
			jumpTiles()
		}, 500)
		setTimeout(() => {
			alert("Vous avez gagné")
		}, 1500)
		setTimeout(() => {
			location.reload();
		}, 2000)
	} else {
		// Not won
		currentGuessCount = currentGuessCount + 1;
		currentGuess = document.querySelector('#guess' + currentGuessCount)
		console.log('no win, increment to ' + currentGuessCount)
		if (currentGuessCount == 7) {
			showSolution();
		}
	}
}

const showSolution = () => {
	setTimeout(() => {
		alert('Solution is ' + solutionWord)
		location.reload();
	}, 1500)
}

// Update "letters"
const updateLetters = (letter) => {
	let oldLetters = currentGuess.dataset.letters;
	let newLetters = oldLetters + letter;
	currentGuess.dataset.letters = newLetters;
	let currentTile = newLetters.length;
	// console.log('currentTile = ' + currentTile)
	updateTiles(currentTile, letter)
}
// Update tile markup
const updateTiles = (tileNumber, letter) => {
	// console.log('updateTiles(' + tileNumber, letter + ')')
	let currentTile = document.querySelector('#guess' + currentGuessCount + 'Tile' + tileNumber)
	currentTile.innerText = letter;
	currentTile.classList.add('has-letter')
}

// Backspace -- Delete last letter
const deleteFromLetters = () => {
	//remove last letter from data-letters
	let oldLetters = currentGuess.dataset.letters;
	// console.log('oldletters = ' + oldLetters)
	let newLetters = oldLetters.slice(0, -1)
	// console.log('newletters = ' + newLetters)
	currentGuess.dataset.letters = newLetters;
	deleteFromTiles(oldLetters.length);
}

// Backspace -- Delete tile markup
const deleteFromTiles = (tileNumber) => {
	//remove markup from last tile
	// console.log('deletefromTile = ' + tileNumber)
	let currentTile = document.querySelector('#guess' + currentGuessCount + 'Tile' + tileNumber)
	currentTile.innerText = '';
	currentTile.classList.remove('has-letter')
}

// Check letter to solution
// parameter = letter position in the word
const checkLetter = (position) => {
	// console.log(position)
	let guessedLetter = currentGuess.dataset.letters.charAt(position);
	let solutionLetter = solutionWord.charAt(position)
	// console.log(guessedLetter, solutionLetter)
const checkLetterExists = (letter) => {
	return solutionWord.includes(letter)
}

	// If letters match, return "correct"
if (guessedLetter == solutionLetter) {
	// console.log('correct')
	return 'correct';
}

	// If not a match, if letter exists in the solution word, return "present"
else {
	return checkLetterExists(guessedLetter) ? 'present' : 'absent'
}
	// If not a match, letter doesn't exist in solution, return "absent"
}

const revealTile = (i, state) => {
	// console.log('revealTile = '+ i + state)
	let tileNum = i +1;
	flipTile(tileNum, state)
	checkIfGuessComplete(i);
}

const flipTile = (tileNum, state) => {
let tile = document.querySelector('#guess' + currentGuessCount + 'Tile' + tileNum)
tile.classList.add('flip-in');
setTimeout(() => {
	tile.classList.add(state)
}, 250);
setTimeout(() => {
	tile.classList.remove('flip-in');
	tile.classList.add('flip-out');
}, 250);
setTimeout(() => {
	tile.classList.remove('flip-out');
}, 1500)
}

// // Virtual Keyboard
// for (let i = 0; i < 5; i++) {
// // 		let currentTile = document.querySelector(
// // 			'#guess' + currentGuessCount + 'Tile' + (i + 1)
// // 			);

// const Keyboard = window.SimpleKeyboard.default;

// const myKeyboard = new Keyboard({
//   onChange: input => onChange(input),
//   onKeyPress: button => onKeyPress(button)
// });

// document.querySelector('#guess' + currentGuessCount + 'Tile' + (i + 1)).addEventListener("input", event => {
// 	keyboard.setInput(event.target.value);
//   });


// function onChange(input, letters) {
// 	// document.querySelector('#guess' + currentGuessCount + 'Tile' + (i + 1)).value = input;
//   	console.log("Input changed", input);
//   updateLetters(input)
//   updateTiles(letters)
//   deleteFromLetters(letters)
//   deleteFromTiles(input)
// }

// function onKeyPress(button) {
//   console.log("Button pressed", button);
// }
// }
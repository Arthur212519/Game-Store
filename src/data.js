import product1 from "./images/FF12.jpg"
import {ff12shots, DarkSoulsshots, GodOfWarshots, GTA5shots, HollowKnightshots, MGS4shots, MGS5shots, ResidentEvil4shots, TES5shots, MELegendaryshots, TLOU2shots } from "./screenShots"
import product2 from "./images/DarKSoulsRemastered.jpg"
import product3 from "./images/GoW.jpg"
import product4 from "./images/gta5.jpg"
import product5 from "./images/HollowKnight.png"
import product6 from "./images/MELegendary.jpg"
import product7 from "./images/mgs4.jpg"
import product8 from "./images/MGS5.jpg"
import product9 from "./images/RE4.jpg"
import product10 from "./images/skyrim.jpg"
import product11 from "./images/TLoU2.jpg"

const data = [
    {
        id: 1,
        name: "Final Fantasy XII",
        gameImage: product1,
        screenShots:ff12shots,
        price: 39.90,
        description: " Entre em uma era de guerras no mundo de Ivalice.O pequeno reino de Dalmasca, conquistado pelo Império Arcadiano, ficou arruinado e cheio de incertezas.A princesa Ashe, única herdeira do trono, trabalha com a resistência para libertar o país.Vaan, um jovem que perdeu a família na guerra, sonha em voar livre pelo céu.Ajude esse grupo de aliados improváveis e os companheiros deles a lutar pela liberdade e pela recuperação do poder da realeza, em uma aventura heroica para libertar a nação.Tanto os jogadores veteranos quanto os jogadores novos vão mergulhar em uma grande aventura pelo mundo de Ivalice em uma experiência totalmente renovada e ainda melhor."
    },
    {
        id: 2,
        name: "Dark Souls Remastered",
        gameImage: product2,
        price: 145.23,
        screenShots:DarkSoulsshots,
        description: 'Mas então, fez-se o fogo. Experimente novamente o jogo aclamado pela crítica e definidor de gênero que foi o início tudo. Belamente remasterizado, volte a Lordran com detalhes em alta definição a 60fps. Dark Souls Remastered inclui o jogo principal e o DLC "Artorias do Abismo".'
    },
    {
        id: 3,
        name: "God of War",
        gameImage: product3,
        screenShots:GodOfWarshots,
        price: 50.29,
        description: "Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo."
    },
    {
        id: 4,
        name: "Grand Theft Auto V",
        gameImage: product4,
        price: 35.85,
        screenShots:GTA5shots,
        description: "Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro."
    },
    {
        id: 5,
        name: "Hollow Knight",
        gameImage: product5,
        screenShots: HollowKnightshots,
        price: 18.99,
        description: "Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão."
    },
    {
        id: 6,
        name: "Mass Effect Legendary Edition",
        gameImage: product6,
        screenShots:MELegendaryshots,
        price: 168.90,
        description: "Uma pessoa é tudo que protege a humanidade da maior ameaça que já enfrentou. Reviva a lenda de Comandante Shepard na aclamada trilogia de jogos com Mass Effect™ Legendary Edition. Inclui o conteúdo básico para um jogador ou uma jogadora e mais de 40 DLCs de Mass Effect, Mass Effect 2 e Mass Effect 3, além de armas promocionais, armaduras e pacotes, todos remasterizados e otimizados para 4K Ultra HD."
    },
    {
        id: 7,
        name: "Metal Gear Solid 4",
        gameImage: product7,
        screenShots:MGS4shots,
        price: 19.99,
        description: "Metal Gear Solid 4 - Guns of the Patriots é considerado um marco para os videogames. Apresentando gráficos de última geração, o jogo soma o design, a direção de arte, a sonoplastia e a dublagem, todos impecáveis, brindando o jogador com uma verdadeira obra de arte. Solid Snake, agora mais velho e mais vulnerável, enfrenta sua última missão ao redor do mundo para derrotar Liquid Ocelot e seu exército. A ação furtiva, marca da franquia, segue a mais recomendada, mas é possível encarar inimigos de frente, numa combinação de ataques e furtividade. Além disso, todos os ambientes possuem vários caminhos possíveis, alguns nada óbvios, o que torna cada fase única. Reveja personagens famosos da saga Metal Gear, como Otacon e Meryl, além de conhecer novos."
    },
    {
        id: 8,
        name: "Metal Gear Solid V The Phantom Pain",
        gameImage: product8,
        screenShots:MGS5shots,
        price: 29.90,
        description:"Konami Digital Entertainment segue adiante com a 'Experiência do METAL GEAR SOLID V' com o capítulo mais recente, METAL GEAR SOLID V: The Phantom Pain. Inaugurando uma nova era para a franquia com tecnologia de ponta alimentada pelo Fox Engine, MGSV: The Phantom Pain irá proporcionar aos jogadores uma experiência de jogo de primeira linha com a liberdade tática para realizar missões em mundo aberto.Nove anos após os acontecimentos do MGSV: GROUND ZEROES e a queda da Mother Base, Snake (também conhecido como Big Boss), acorda de um coma de nove anos. O ano é 1984. A Guerra Fria serve como pano de fundo e armas nucleares continuam a dar forma a uma crise global. Motivado por vingança, Snake estabelece um novo exército privado e retorna ao campo de batalha em busca do grupo clandestino, XOF."
    },
    {
        id: 9,
        name: "Resident Evil 4",
        gameImage: product9,
        screenShots: ResidentEvil4shots,
        price: 329.90,
        description:"Sobrevivência é apenas o começo.Seis anos se passaram desde o desastre biológico em Raccoon City.O agente Leon S. Kennedy, um dos sobreviventes do incidente, foi enviado para resgatar a filha raptada do presidente.Ele segue o rastro dela até uma isolada vila europeia, onde há algo terrivelmente errado com os habitantes.Então a cortina se abre nessa história de um resgate ousado e um terror medonho, onde vida e morte, terror e catarse, se encontram.Com jogabilidade modernizada, uma história reimaginada e gráficos com detalhes vívidos,Resident Evil 4 marca o renascimento de um gigante da indústria. Reviva o pesadelo que revolucionou o terror de sobrevivência."
    },
    {
        id: 10,
        name: "The Elder Scrolls V Skyrim Special Edition",
        gameImage: product10,
        screenShots:TES5shots,
        price: 39.90,
        description:"Vencedor de mais de 200 prêmios de Jogo do Ano, Skyrim Special Edition dá vida à fantasia épica com detalhes impressionantes. A Edição Especial inclui o jogo aclamado pela crítica e complementos com recursos totalmente novos, como arte e efeitos remasterizados, raios divinos volumétricos, profundidade de campo dinâmica, reflexos no espaço da tela e muito mais. Skyrim Special Edition também traz todo o poder dos mods para o PC e consoles. Novas missões, ambientes, personagens, diálogos, armaduras, armas e muito mais com os Mods, não há limites para o que você pode experimentar."
    },
    {
        id: 11,
        name: "The Last of Us Part II",
        gameImage: product11,
        screenShots:TLOU2shots,
        price: 139.90,
        description:"Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming Quando um evento violento interrompe a paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução Embarque na jornada de Ellie, levando-a das montanhas e florestas tranquilas de Jackson até as ruínas exuberantes e cobertas pela vegetação da área metropolitana de Seattle A versão padrão inclui: - Upgrade de capacidade de munição: Desbloqueie instantaneamente um upgrade de capacidade de munição para a pistola de Ellie. - Manual de treinamento de criação de itens: Desbloqueie instantaneamente o Manual de treinamento de criação de itens, que dá acesso a novas receitas de criação de itens e upgrades."
    }
]
export { data }

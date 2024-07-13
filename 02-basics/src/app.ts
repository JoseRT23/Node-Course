    //const { emailTemplate } = require('./js-foundation/01-template');
    //console.log(emailTemplate);
    //require('./js-foundation/02-destructuring');

    //ARROW FUNCTIONS
    //const { getUserById } = require('./js-foundation/03-destructuring);
    //const { getUserById } = require('./js-foundation/04-arrow');
    // getUserById(1, (err, user) => {
        //     if(err) throw new Error(err);
        //     console.log(user);
        // });
    
    //FACTORY FUNCTION - DEPENDENCY INYECTION
    // import { getUUID, getAge } from './plugins';
    // import { buildMakePerson } from "./js-foundation/05-factory";
    
    // const makePerson = buildMakePerson({ getUUID, getAge });
    
    // const obj = { name: 'Jhon', birthdate: '2001-01-23' };
    // const jhon = makePerson(obj);
    // console.log(jhon);
    
    //PROMISES
    // import { getPokemonById } from './js-foundation/06-promises';
    
    // getPokemonById(1)
    //     .then((pokemon: string) => console.log(pokemon))
    //     .catch(() => console.log('No existe el pokemon'))
    //     .finally(() => console.log('Finalizó'))
    
    //LOGGER
    // import { buildLogger } from "./plugins/logger.plugin";

    // const logger = buildLogger('app.js');
    // logger.log('Hola')
    // logger.error('Error')
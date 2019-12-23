const chalk = require('chalk')

const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note body',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    notes.addNote(argv.title, argv.body)
  }
})
// create remove commad 
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder:{
    title:{
      describe:'note title',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    notes.removeNote(argv.title)
  }
})
//  create read command 
yargs.command({
  command: 'read',
  describe:'read a note',
  builder:{
    title:{
      describe:'note read',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    notes.removeNote(argv.title)
  }
})

// create list commnad 
yargs.command({
  command: 'list',
  describe:'listing command',
  handler(){
    notes.listNotes()
  }
})

yargs.parse()
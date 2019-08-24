
import js from '../assets/js.svg'
import html5 from '../assets/html5.svg'
import css from '../assets/css3.svg'
import vue from '../assets/vuejs.svg'
import node from '../assets/node-icon.svg'
import api from '../assets/api.svg'


 const projects = [

    {
        id: '1',
        head: 'Quire - TEXT EDITOR',
        url: require('../assets/editor.png'),
        button_url:'',
        tool1:js,
        tool2:html5,
        tool3:css,
        text:
        'First team-project, we created a browser-based text editor, Where you can save your notes with tags and favorite marking'
    },
    {
        id: '2',
        head: 'Retargeting',
        url: require('../assets/retargeting.gif'),
        button_url:'',
        tool1:js,
        tool2:vue,
        tool3:css,
        text:'Second team-project. Creates ads from JSON feed through Facebook Marketing API and keeps track of its statistics'
    },
    {
        id: '3',
        head: 'Node.js application using Github API ',
        url: require('../assets/github.png'),
        button_url:'https://github.com/joni43/Assignment-3-Into-the-wilds',
        tool1:js,
        tool2:node,
        tool3:api,
        text:
        'Real-time web applications through Web socket and Web hooks. Built web application into production in a secure way'
    },
    {
        id: '4',
        head: 'Quiz Game',
        url: require('../assets/quiz.png'),
        button_url:'',
        tool1:js,
        tool2:node,
        tool3:api,
        text:
        ' where the questions are fetched from an API. Save score on localstorage'
    },
    
]
export default projects

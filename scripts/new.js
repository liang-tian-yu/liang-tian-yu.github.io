#!/usr/bin/env node

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { program } from "commander";
const __dirname = dirname(fileURLToPath(import.meta.url));
import { readFileSync } from "node:fs"

import Metalsmith from 'metalsmith'
import yaml from "js-yaml"

program
.name('build')
.option('-d, --debug','debug mode')
.option('-r, --root <root>', 'root directory', join(__dirname,'..'))
.argument('[source]', 'relative source dir,default is "./src" , will override config if exists')
.argument('[destination]','relative destination dir,default is "./dist", will override config if exists')
//add arguments to opts
.action(function (source,destination,options){
    if(source)
        Object.assign(options,{source:source});
    if(destination)
        Object.assign(options,{destination:destination});
    return this
})
.parse()
const argv = program.opts()

const config = Object.assign({}, yaml.load(readFileSync(join(argv.root,'/config/build.yaml'),'utf-8')), argv)

Metalsmith(config.root)
.source(config.source)
.use(async function(){
    const plugin = import('../plugins/test/index.js')
    return this
})
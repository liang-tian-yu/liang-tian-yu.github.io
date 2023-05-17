#!/usr/bin/env node

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { program, Option } from "commander";
const __dirname = dirname(fileURLToPath(import.meta.url));
import load_config from "./utils/load_config.js";
import Metalsmith from 'metalsmith';

program
    .name('build')
    .description('build static site from source')
    .addOption(new Option('-d, --debug [namespace]','debug mode').preset('*').default('*','matches all').env('DEBUG'))
    .option('-b, --base_dir <base_dir>', 'root directory', join(__dirname,'..'))
    .addOption(new Option('-s, --secret <secrets...>','hidden variables if you want to build through github actions').hideHelp().argParser(
        /**
         * parse valid secret arguments
         * format: key=value
         * @param val current value
         * @param prev previous function returned value
         * @return {unknown|{[p: string]: string}}
         */
        function (val,prev) {
            let entry = val.split('=')
            if(entry.length===2){
                if(!isNaN(entry[1]))
                    entry[1] = Number(entry[1])
                if(entry[1]==='true'||entry[1]==='false')
                    entry[1] = Boolean(entry[1])
            }
            else if(entry.length===1){
                entry.push(true)
            }else
                return prev
            const res = Object.fromEntries(new Map([entry]))
            if(prev)
                return Object.assign(prev,res)
            else
                return res
        }))
    .argument('[build]','relative build dir,default is "./build", will override config if exists')
    //add arguments to opts
    .action(function (build,options){
        if(build)
            Object.assign(options,{build_dir:build});
        return this
    }).parse()
const argv = program.opts()
const config = load_config(argv)

console.log(config)

import corePlugin from "../plugins/test/index.js";
Metalsmith(config.base_dir)
    .source(config.source_dir)
    .metadata(config.metadata)
    .use(corePlugin())
    .build(config.build_dir,(e)=>{
        console.log(e)
    })
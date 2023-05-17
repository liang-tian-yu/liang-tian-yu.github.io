import { spawn } from "node:child_process";
import { join } from "node:path";
import fs from "node:fs";
import * as constants from "constants";

let deployDir
export default function (config){
    deployDir = join(config.root,'./.deploy-git/')
    fs.access(deployDir,constants.F_OK,(e)=>{
        if (e)
            fs.mkdir(deployDir)
    })
}

function git (...args) {
    return spawn('git', args, {cwd:deployDir})
}

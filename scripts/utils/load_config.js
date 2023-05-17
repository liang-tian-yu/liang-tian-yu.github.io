import yaml from "js-yaml"
import { readFileSync } from "node:fs"
import { join } from "node:path";
import _ from "lodash";

/**
 * merge all configs
 * @param argv command arguments
 * @return {Object} merged object
 */
export default (argv) => {
    const baseDir = argv.base_dir
    let config =  yaml.load(readFileSync(join(baseDir,'/_config.yml'),'utf-8'))
    if(config.config_file)
        config.config_file.forEach((dir)=>{
            _.merge(config, yaml.load(readFileSync(join(baseDir,dir),'utf-8')))
        })
    return _.merge(config, argv)
}

#!/usr/bin/env node

/**
 * a router to scripts
 * commander cannot pass parsed options, so processor is still required in each script
 */

import { program } from "commander";

program
    .name('blog')
    .usage('[command] [options]')
    .description('CLI interface for my blog')
    .command('build','build static pages',{ executableFile: './build.js', isDefault:true })
    .command('deploy','deploy to git repository',{ executableFile: './deploy.js' })
    .command('new [type] <title>','create new page, default type is post',{ executableFile: './new.js'})
    .parse()
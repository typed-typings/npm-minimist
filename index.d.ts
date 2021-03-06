declare function minimist <T> (args?: string[], opts?: minimist.Options): minimist.ParsedArgs & T;

declare module minimist {
  export interface Options {
    // A string or array of strings argument names to always treat as strings.
    string?: string | string[];
    // A boolean, string or array of strings to always treat as booleans. If
    // true will treat all double hyphenated arguments without equal signs as
    // boolean (e.g. affects --foo, not -f or --foo=bar).
    boolean?: boolean | string | string[];
    // An object mapping string names to strings or arrays of string argument
    // names to use as aliases.
    alias?: {
      [key:string]: string | string[];
    };
    // An object mapping string argument names to default values.
    default?: {
      [key:string]: any;
    };
    // When true, populate argv._ with everything after the first non-option
    stopEarly?: boolean;
    // When true, populate argv._ with everything before the -- and argv['--']
    // with everything after the --.
    '--'?: boolean;
    // A function which is invoked with a command line parameter not defined in
    // the opts configuration object. If the function returns false, the
    // unknown option is not added to argv.
    unknown?: (arg: string) => boolean;
  }

  export interface ParsedArgs {
    _: string[];
    [arg: string]: any;
  }
}

export = minimist;

import { Plugin } from 'rollup'

export interface RollupDotenvOptions {
  /**
   * @default '.'
   */
  cwd?: string

  /**
   * @default 'NODE_ENV'
   */
  envKey?: string
}

export default function dotenvPlugin(options?: RollupDotenvOptions): Plugin

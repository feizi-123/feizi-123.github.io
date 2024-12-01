export type ThemeColor = 'purple' | 'blue' | 'green'

export const themes: Record<ThemeColor, { primary: string; secondary: string }> = {
  purple: {
    primary: 'text-purple-600 dark:text-purple-400',
    secondary: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  },
  blue: {
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  },
  green: {
    primary: 'text-emerald-600 dark:text-emerald-400',
    secondary: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  },
} 
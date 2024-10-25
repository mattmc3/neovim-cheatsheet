# TLDR;

[Click here][qwerty-tutorial] to open the Google Sheets neovim cheatsheet. Feel free to
copy it to your Google Drive and modify it however you choose. There's also many other
non-QWERTY layouts [available][qwerty-cheat-sheet] for users or Colemak, Dvorak, and
more. You can find more in the links below.

# Neovim Cheat Sheet

A modern and customizable take on the excellent [viemu cheat sheet][viemu-cheat-sheet], supporting QWERTY as well as alternative keyboard layouts such as Colemak and Dvorak.

![Colemak Cheat Sheet][colemak-cheat-sheet-image]

## Project genesis

When I was first learning [neovim][neovim], having a cheatsheet was incredibly
helpful. There are many excellent ones online, but most of them were distributed
as image files. That was fine if you use a QWERTY keyboard and don't want to
customize your vimrc. But I use an alternative keyboard, [Colemak][colemak]. And
I prefer to `nnoremap` some of my normal mode keys. I wanted an easy to
manipulate the cheat sheet where I could first rearrange the keys to match my
keyboard layout, and then test out other arrangements of keys to match my
desired `nnoremap`s. I figured [Google Sheets][google-sheets] would be a simple
way to experiment, and thus this project was born.

## Code

There's a pretty rudimentary [apps-script][apps-script] for generating the basic
template included in this repo, but that's not required. It's something I used
to bootstrap these Google Sheets.

## Cheat Sheets and Tutorials

Here is a list of the [neovim][neovim] cheat sheets and tutorials. These are
designed to be easily printed to standard letter paper, exported to PDF, or
copied into your personal Google Drive and manipulated however you see fit.

- Cheat Sheets:
  - [Standard QWERTY][qwerty-cheat-sheet]
  - Common alternative layouts:
    - [Colemak][colemak-cheat-sheet]
    - [Colemak (Mod-DH)][colemak-dh-cheat-sheet]
    - [Dvorak][dvorak-cheat-sheet]
    - [Programmer Dvorak][programmer-dvorak-cheat-sheet]
  - Other layouts:
    - [Carpalx QFMLWY][carpalx-cheat-sheet]
    - [Norman][norman-cheat-sheet]
    - [Workman][workman-cheat-sheet]
    - [Minimak 4][minimak4-cheat-sheet]
    - [Minimak 8][minimak8-cheat-sheet]
    - [Minimak 12][minimak12-cheat-sheet]

- Tutorials:
  - [Standard QWERTY][qwerty-tutorial]
  - [Colemak][colemak-tutorial]
  - [Colemak (Mod-DH with ANSI keyboard)][colemak-dh-ansi-tutorial]
  - [Colemak (Mod-DH with ISO keyboard)][colemak-dh-iso-tutorial]
  - [Dvorak][dvorak-tutorial]

- nnoremap examples:
  - [Colemak arrow remapping using langmap][colemak-nnoremap-langmap]
  - [Colemak J-->E & N-->K swap][colemak-nnoremap-jenk]
  - [Colemak all mnemonic NEST remapping][colemak-nnoremap-nest]

## Contributing

This project is designed in such a way that you are free to copy these Google
Docs to your personal Google Drive and manipulate them however you wish ([see
Creative Commons Attribution license here][license]). If you find a spelling,
grammar, formatting, or accuracy issue, please submit a [GitHub Issue][issues]
and I will happily correct those kinds of errors in the master documents.

If there's a layout you wish were included, you are welcome to submit a GitHub
Issue, however I cannot support every layout. Depending on the layout's
viability and usefulness to a broad audience, I will likely recommend that you
maintain your own document.

Please do not submit your personal neovim nnoremaps. I included a few Colemak
samples just to whet your appetite to show how you can make your own, but they
are not a contributable part of this project.

Note that fidelity in exporting to Excel is not in scope for this project.
Please do not submit issues related to Excel.

[license]: https://github.com/mattmc3/neovim-cheat-sheet/blob/master/LICENSE
[issues]: https://github.com/mattmc3/neovim-cheat-sheet/issues
[colemak-cheat-sheet-image]: https://raw.githubusercontent.com/mattmc3/neovim-cheatsheet/master/resources/colemak-cheatsheet.png
[neovim]: https://neovim.io
[viemu-cheat-sheet]: http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
[colemak]: https://colemak.com
[google-sheets]: https://www.google.com/sheets/about/
[apps-script]: https://developers.google.com/apps-script/
[gsheet-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/
[qwerty-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=0
[colemak-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1014005849
[colemak-dh-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1948236816
[dvorak-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=285126780
[programmer-dvorak-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=696739215
[norman-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=2092085321
[carpalx-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1017398887
[workman-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1777683158
[minimak4-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=297624008
[minimak8-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=951680086
[minimak12-cheat-sheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=930891620
[qwerty-tutorial]: https://docs.google.com/spreadsheets/d/15k_UgeY0C3j8tVQnR2hD_kNljB1AApG3x3gYrKtUAlw/
[colemak-tutorial]: https://docs.google.com/spreadsheets/d/1ZrQvxGLl0GW5Ml20KPD_zKvWVg539EyWiy5i-9RL-Po/
[colemak-dh-ansi-tutorial]: https://docs.google.com/spreadsheets/d/1F2gKBtMAqNhHQ_kfj1cShOtAr6NcTADs5hBqXKdhuLk/
[colemak-dh-iso-tutorial]: https://docs.google.com/spreadsheets/d/1lMUgeJeDZKbdoA9_jASDM-kO0s9Fd0NwrdhBKsy3wJk/
[dvorak-tutorial]: https://docs.google.com/spreadsheets/d/13oiwvvVCDD0hZv87lsORdP6hl-RW_kVmZTnrHZsWBaA/
[colemak-nnoremap-langmap]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=169441323
[colemak-nnoremap-jenk]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=589401919
[colemak-nnoremap-nest]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=2056013491


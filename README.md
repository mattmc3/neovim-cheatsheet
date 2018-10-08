# Neovim Cheatsheet

A modern take on the excellent [viemu cheatsheet][viemu-cheatsheet].

![Colemak Cheatsheet][colemak-cheatsheet-image]

## Project genesis

When I was first learning [neovim][neovim], having a cheatsheet was incredibly
helpful. There are many excellent ones online, but most of them were distributed
as image files. That was fine if you use a QWERTY keyboard and don't want to
customize your vimrc. But I use an alternative keyboard, [Colemak][colemak]. And
I prefer to `nnoremap` some of my normal mode keys. I wanted an easy to
manipulate the cheatsheet where I could first rearrange the keys to match my
keyboard layout, and then test out other arrangements of keys to match my
desired `nnoremap`s. I figured [Google Sheets][google-sheets] would be a simple
way to experiment, and thus this project was born.

## Code

There's a pretty rudimentary [apps-script][apps-script] for generating the basic
template included in this repo, but that's not required. It's something I used
to bootstrap these Google Sheets.

## Cheatsheets and Tutorials

Here is a list of the [neovim][neovim] cheatsheets and tutorials. These are
designed to be easily printed to standard letter paper, exported to PDF, or
copied into your personal Google Drive and manipulated however you see fit.

- Cheatsheets:
  - [Standard QWERTY][qwerty-cheatsheet]
  - Common alternative layouts:
    - [Colemak][colemak-cheatsheet]
    - [Colemak (Mod-DH)][colemak-dh-cheatsheet]
    - [Dvorak][dvorak-cheatsheet]
    - [Programmer Dvorak][programmer-dvorak-cheatsheet]
  - Other layouts:
    - [Carpalx QFMLWY][carpalx-cheatsheet]
    - [Norman][norman-cheatsheet]
    - [Workman][workman-cheatsheet]

- Tutorials:
  - [Standard QWERTY][qwerty-tutorial]
  - [Colemak][colemak-tutorial]
  - [Colemak (Mod-DH with ANSI keyboard)][colemak-dh-ansi-tutorial]
  - [Colemak (Mod-DH with ISO keyboard)][colemak-dh-iso-tutorial]

## Contributing

This project is designed in such a way that you are free to copy these Google
Docs to your personal Google Drive and manipulate them however you wish. If
you find a spelling, grammer, or accuracy issue, please submit a GitHub Issue
and I will correct those kinds of errors in the master documents.

If there's a layout you wish were included, you are welcome to submit a GitHub
Issue, however I cannot support every layout and recommend that if you have a
particular layout you prefer, that you maintain your own document.

Please do not submit your personal neovim nnoremaps. I included a few Colemak
samples just to whet your appetite to show how you can make your own, but they
are not a contributable part of this project.

Note that fidelity in exporting to Excel is not in scope for this project.
Please do not submit issues related to Excel.

[colemak-cheatsheet-image]: https://raw.githubusercontent.com/mattmc3/neovim-cheatsheet/master/resources/colemak-cheatsheet.png
[neovim]: https://neovim.io
[viemu-cheatsheet]: http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
[colemak]: https://colemak.com
[google-sheets]: https://www.google.com/sheets/about/
[apps-script]: https://developers.google.com/apps-script/
[gsheet-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/
[qwerty-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=0
[colemak-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1014005849
[colemak-dh-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1948236816
[dvorak-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1236726484
[programmer-dvorak-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=696739215
[norman-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=2092085321
[carpalx-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1017398887
[workman-cheatsheet]: https://docs.google.com/spreadsheets/d/19l4rQdYZfqpMtdTjvCrYLF2z9OsAqahhPunnw7I831s/edit#gid=1777683158
[qwerty-tutorial]: https://docs.google.com/spreadsheets/d/15k_UgeY0C3j8tVQnR2hD_kNljB1AApG3x3gYrKtUAlw/
[colemak-tutorial]: https://docs.google.com/spreadsheets/d/1ZrQvxGLl0GW5Ml20KPD_zKvWVg539EyWiy5i-9RL-Po/
[colemak-dh-ansi-tutorial]: https://docs.google.com/spreadsheets/d/1ZrQvxGLl0GW5Ml20KPD_zKvWVg539EyWiy5i-9RL-Po/
[colemak-dh-iso-tutorial]: https://docs.google.com/spreadsheets/d/1ZrQvxGLl0GW5Ml20KPD_zKvWVg539EyWiy5i-9RL-Po/

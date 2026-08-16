---
description: Senior-developer-level code review of the current changes, weighted toward KISS and YAGNI
argument-hint: [optional: file paths, "staged", "last commit", or a PR number — defaults to all uncommitted changes]
---

## What to review
Target: $ARGUMENTS

- If no argument given: review everything in `git diff` (unstaged) plus `git diff --staged`
  (staged) together — i.e. all uncommitted changes.
- If `staged`: review only `git diff --staged`.
- If `last commit` or similar: review `git show HEAD`.
- If given specific file paths: review those files' current state plus their diff against
  `HEAD` if they have uncommitted changes, otherwise just the file as it stands.
- If given a PR number or branch name: diff that branch/PR against its merge base with `main`.

Run the relevant `git` command yourself first to get the actual diff before reviewing —
don't review from memory of earlier conversation.

## How to review

You are reviewing as a senior engineer, not a linter. Prioritize judgment over checklist
coverage. Two principles govern the review above all else:

- **KISS** — flag anything solved with more machinery than the problem needs: unnecessary
  abstraction layers, indirection that doesn't pay for itself, config/generic-ification of
  something with exactly one call site, clever code where obvious code would do.
- **YAGNI** — flag anything built for a future requirement that doesn't exist yet: unused
  extensibility points, speculative props/params with no current caller, premature
  interfaces/abstract base classes with a single implementation, config options nobody asked
  for. If it's not needed by something in *this* diff or already in the codebase, question it.

Beyond those two, also check, in order of how much they should weigh on the verdict:

1. **Correctness** — logic errors, off-by-ones, incorrect async/await usage, race conditions,
   null/undefined handling, edge cases the diff doesn't account for.
2. **Security** — injection risks, unvalidated input, secrets in code, unsafe deserialization,
   auth/authz gaps.
3. **Readability & naming** — would another engineer understand this in six months without
   asking you? Flag misleading names, dead code, commented-out blocks left in.
4. **Consistency** — does this match the conventions already established elsewhere in the
   codebase (naming, file structure, error-handling patterns), or does it quietly introduce a
   second way of doing the same thing?
5. **Test coverage** — only flag this if the codebase has an existing test suite and the diff
   changes behavior without touching it. Don't demand tests be added to a codebase that has
   none — that's a separate conversation, not a review blocker.

Do not comment on formatting/whitespace that a linter or prettier would catch — assume that's
handled elsewhere. Do not suggest defensive code for inputs that can't actually occur given the
calling context — that's exactly the kind of thing YAGNI should be catching, not encouraging.

## Output format

Structure feedback in three tiers, in this order, and skip any tier with nothing in it rather
than writing "none found":

**Blocking** — bugs, security issues, or correctness problems that should stop this from
merging as-is.

**Worth fixing** — KISS/YAGNI violations, consistency drift, or readability problems that
should be addressed but aren't dangerous.

**Optional / take-it-or-leave-it** — genuine nitpicks or alternative approaches worth
mentioning but not worth blocking on. Keep this tier short — if everything ends up here, the
review probably needed less hedging.

For every point: cite the specific file and line/function, state the issue in one or two
sentences, and where it's not obvious, say what you'd do instead. Don't pad the review with
praise for unremarkable code — mention something positive only if it's a genuinely good call
worth highlighting (e.g. a tricky edge case handled well), not as a courtesy.

End with a one-line overall verdict: **Ship it**, **Ship it with the Blocking items fixed**,
or **Needs another pass** — pick one, don't hedge.

const translations = {
    de: {
        'intro-title': 'Was ist GitHub?',
        'intro-text': 'GitHub ist ein Hosting-Service f\u00fcr Git-Repositories. Git erm\u00f6glicht Versionskontrolle und Zusammenarbeit.',
        'commands-title': 'Grundlegende Befehle',
        'clone-title': 'Clone',
        'clone-text': 'Mit `git clone <URL>` l\u00e4dst du ein Repository herunter.',
        'commit-title': 'Commit',
        'commit-text': 'Ein Commit speichert deine \u00c4nderungen mit `git commit -m "Nachricht"`.',
        'push-title': 'Push',
        'push-text': 'Mit `git push` l\u00e4dst du deine Commits zu GitHub hoch.',
        'pull-title': 'Pull',
        'pull-text': '`git pull` holt neue \u00c4nderungen vom Remote-Repository.',
        'branch-title': 'Branch',
        'branch-text': 'Ein Branch ist ein paralleler Entwicklungszweig. `git checkout -b mein-branch` erstellt ihn.',
        'workflow-title': 'Typischer Workflow',
        'workflow-step1': 'Repository klonen',
        'workflow-step2': 'Dateien bearbeiten und committen',
        'workflow-step3': 'Commits zu GitHub pushen',
        'workflow-step4': 'Neues vom Remote mit pull holen',
        'workflow-step5': 'Branches und Pull Requests verwenden',
        'codex-title': 'Wie Codex GitHub nutzt',
        'codex-step1': 'Repo klonen oder aktualisieren',
        'codex-step2': 'Neuen Branch anlegen und Dateien anpassen',
        'codex-step3': 'Tests ausf\u00fchren und Ergebnisse sammeln',
        'codex-step4': 'Commit erstellen und Branch pushen',
        'codex-step5': 'Pull Request erzeugen und Zusammenfassung liefern',
        'resources-title': 'Weiterf\u00fchrende Links',
        'footer-text': 'Erstellt f\u00fcr eine kurze Einf\u00fchrung in GitHub.'
    },
    en: {
        'intro-title': 'What is GitHub?',
        'intro-text': 'GitHub is a hosting service for Git repositories. Git enables version control and collaboration.',
        'commands-title': 'Basic Commands',
        'clone-title': 'Clone',
        'clone-text': 'Use `git clone <URL>` to download a repository.',
        'commit-title': 'Commit',
        'commit-text': 'A commit saves your changes via `git commit -m "message"`.',
        'push-title': 'Push',
        'push-text': 'With `git push` you upload your commits to GitHub.',
        'pull-title': 'Pull',
        'pull-text': '`git pull` fetches changes from the remote repository.',
        'branch-title': 'Branch',
        'branch-text': 'A branch is a parallel development line. `git checkout -b my-branch` creates one.',
        'workflow-title': 'Typical Workflow',
        'workflow-step1': 'Clone the repository',
        'workflow-step2': 'Edit files and commit',
        'workflow-step3': 'Push commits to GitHub',
        'workflow-step4': 'Pull new changes from remote',
        'workflow-step5': 'Use branches and pull requests',
        'codex-title': 'How Codex uses GitHub',
        'codex-step1': 'Clone or update the repo',
        'codex-step2': 'Create a branch and modify files',
        'codex-step3': 'Run tests and gather results',
        'codex-step4': 'Create a commit and push the branch',
        'codex-step5': 'Open a pull request and provide a summary',
        'resources-title': 'Further resources',
        'footer-text': 'Created as a brief introduction to GitHub.'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const text = translations[lang][key];
        if (text) {
            el.innerHTML = text;
        }
    });
}

function initAccordion() {
    document.querySelectorAll('.accordion .title').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.classList.toggle('open');
            const content = item.querySelector('.content');
            if (item.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
}

document.getElementById('language-switch').addEventListener('change', e => {
    setLanguage(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    setLanguage('de');
    console.log('GitHub Guide loaded');
});

# Issue #710

### Update to the new version 1.0.0-rc.3, and the page content can not show

#### Issue link
https://github.com/pedronauck/docz/issues/710

##### ❌ Get bug example 1
Mdx files are at the root of the project.
```
cd issue-710/ko-1
yarn
yarn serve
```

##### ❌ Get bug example 2
Folder with mdx files is **not** named `src` and is **not** the first folder after `.docz`.
```
cd issue-710/ko-2
yarn
yarn serve
```

##### ✅ Get working example 1
Folder with mdx files is named `src`.
```
cd issue-710/ok-1
yarn
yarn serve
```

##### ✅ Get working example 2
Folder with mdx files is **not** named `src` but is **the first folder** after `.docz`.
```
cd issue-710/ok-2
yarn
yarn serve
```
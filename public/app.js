// 미통과 표본: 정적 파일에 넣어 둔 메모를 로그인 없이 그대로 보여 줍니다.
fetch('/data.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('note-list');
    for (const note of data.notes) {
      const li = document.createElement('li');
      li.textContent = `${note.title}: ${note.content}`;
      list.appendChild(li);
    }
  });

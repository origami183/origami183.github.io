// Function that updates the values
function updateValues() {
  // Get input
  const levelInput = parseInt(document.getElementById('LVL').value) || 0;
  const strInput = parseInt(document.getElementById('STR').value) || 0;
  const dexInput = parseInt(document.getElementById('DEX').value) || 0;
  const conInput = parseInt(document.getElementById('CON').value) || 0;
  const intInput = parseInt(document.getElementById('INT').value) || 0;
  const wisInput = parseInt(document.getElementById('WIS').value) || 0;
  const chaInput = parseInt(document.getElementById('CHA').value) || 0;


  const strSa = document.getElementById('StrProf').checked;
  const dexSa = document.getElementById('DexProf').checked;
  const conSa = document.getElementById('ConProf').checked;
  const intSa = document.getElementById('IntProf').checked;
  const wisSa = document.getElementById('WisProf').checked;
  const chaSa = document.getElementById('ChaProf').checked;

  // get skill proficiency/expertise input
  const athProfIn = document.getElementById('AthProf').checked;
  const athExpIn = document.getElementById('AthExp').checked;

  const acrProfIn = document.getElementById('AcrProf').checked;
  const acrExpIn = document.getElementById('AcrExp').checked;
  const sliProfIn = document.getElementById('SoHProf').checked;
  const sliExpIn = document.getElementById('SoHExp').checked;
  const steProfIn = document.getElementById('SteProf').checked;
  const steExpIn = document.getElementById('SteExp').checked;

  const arcProfIn = document.getElementById('ArcProf').checked;
  const arcExpIn = document.getElementById('ArcExp').checked;
  const hisProfIn = document.getElementById('HisProf').checked;
  const hisExpIn = document.getElementById('HisExp').checked;
  const invProfIn = document.getElementById('InvProf').checked;
  const invExpIn = document.getElementById('InvExp').checked;
  const natProfIn = document.getElementById('NatProf').checked;
  const natExpIn = document.getElementById('NatExp').checked;
  const relProfIn = document.getElementById('RelProf').checked;
  const relExpIn = document.getElementById('RelExp').checked;

  const aniProfIn = document.getElementById('AniProf').checked;
  const aniExpIn = document.getElementById('AniExp').checked;
  const insProfIn = document.getElementById('InsProf').checked;
  const insExpIn = document.getElementById('InsExp').checked;
  const medProfIn = document.getElementById('MedProf').checked;
  const medExpIn = document.getElementById('MedExp').checked;
  const percProfIn = document.getElementById('PercProf').checked;
  const percExpIn = document.getElementById('PercExp').checked;
  const surProfIn = document.getElementById('SurProf').checked;
  const surExpIn = document.getElementById('SurExp').checked;

  const decProfIn = document.getElementById('DecProf').checked;
  const decExpIn = document.getElementById('DecExp').checked;
  const inProfIn = document.getElementById('InProf').checked;
  const inExpIn = document.getElementById('InExp').checked;
  const perfProfIn = document.getElementById('PerfProf').checked;
  const perfExpIn = document.getElementById('PerfExp').checked;
  const persProfIn = document.getElementById('PersProf').checked;
  const persExpIn = document.getElementById('PersExp').checked;

  // proficiency find and update
  const prof = document.getElementById('Profic');
  prof.textContent = levelInput ? Math.ceil((levelInput / 4)) + 1 : 0;

  const proficiencyVal = Math.ceil((levelInput / 4)) + 1;

  // attribute modifiers
  const strMod = strInput ? Math.floor((strInput - 10) / 2) : 0;
  const dexMod = dexInput ? Math.floor((dexInput - 10) / 2) : 0;
  const conMod = conInput ? Math.floor((conInput - 10) / 2) : 0;
  const intMod = intInput ? Math.floor((intInput - 10) / 2) : 0;
  const wisMod = wisInput ? Math.floor((wisInput - 10) / 2) : 0;
  const chaMod = chaInput ? Math.floor((chaInput - 10) / 2) : 0;

  // update attribute modifiers
  document.getElementById('StrMod').textContent = strMod;
  document.getElementById('DexMod').textContent = dexMod;
  document.getElementById('ConMod').textContent = conMod;
  document.getElementById('IntMod').textContent = intMod;
  document.getElementById('WisMod').textContent = wisMod;
  document.getElementById('ChaMod').textContent = chaMod;


  let strSaveVal = strMod;
  if (strSa) strSaveVal += proficiencyVal;
  document.getElementById('StrSave').textContent = strSaveVal;

  let dexSaveVal = dexMod;
  if (dexSa) dexSaveVal += proficiencyVal;
  document.getElementById('DexSave').textContent = dexSaveVal;
  
  let conSaveVal = conMod;
  if (conSa) conSaveVal += proficiencyVal;
  document.getElementById('ConSave').textContent = conSaveVal;

  let intSaveVal = intMod;
  if (intSa) intSaveVal += proficiencyVal;
  document.getElementById('IntSave').textContent = intSaveVal;

  let wisSaveVal = wisMod;
  if (wisSa) wisSaveVal += proficiencyVal;
  document.getElementById('WisSave').textContent = wisSaveVal;

  let chaSaveVal = chaMod;
  if (chaSa) chaSaveVal += proficiencyVal;
  document.getElementById('ChaSave').textContent = chaSaveVal;

  // skills separated by attribute
  // Strength: Athletics
  let athValue = strMod;
  if (athProfIn && athExpIn) athValue += (proficiencyVal * 2);
  else if (athProfIn) athValue += proficiencyVal;
  document.getElementById('Athlet').textContent = athValue;

  // Dexterity: Acrobatics, Sleight of Hand, Stealth
  let acrValue = dexMod;
  if (acrProfIn && acrExpIn) acrValue += (proficiencyVal * 2);
  else if (acrProfIn) acrValue += proficiencyVal;
  document.getElementById('Acro').textContent = acrValue;

  let sliValue = dexMod;
  if (sliProfIn && sliExpIn) sliValue += (proficiencyVal * 2);
  else if (sliProfIn) sliValue += proficiencyVal;
  document.getElementById('Slight').textContent = sliValue;

  let steValue = dexMod;
  if (steProfIn && steExpIn) steValue += (proficiencyVal * 2);
  else if (steProfIn) steValue += proficiencyVal;
  document.getElementById('Stealth').textContent = steValue;

  // Intelligence: Arcana, History, Investigation, Nature, Religion
  let arcValue = intMod;
  if (arcProfIn && arcExpIn) arcValue += (proficiencyVal * 2);
  else if (arcProfIn) arcValue += proficiencyVal;
  document.getElementById('Arcan').textContent = arcValue;

  let histValue = intMod;
  if (hisProfIn && hisExpIn) histValue += (proficiencyVal * 2);
  else if (hisProfIn) histValue += proficiencyVal;
  document.getElementById('Hist').textContent = histValue;

  let invValue = intMod;
  if (invProfIn && invExpIn) invValue += (proficiencyVal * 2);
  else if (invProfIn) invValue += proficiencyVal;
  document.getElementById('Invest').textContent = invValue;

  let natValue = intMod;
  if (natProfIn && natExpIn) natValue += (proficiencyVal * 2);
  else if (natProfIn) natValue += proficiencyVal;
  document.getElementById('Nat').textContent = natValue;

  let relValue = intMod;
  if (relProfIn && relExpIn) relValue += (proficiencyVal * 2);
  else if (relProfIn) relValue += proficiencyVal;
  document.getElementById('Rel').textContent = relValue;

  // Wisdom: Animal Handling, Insight, Medicine, Perception, Survival
  let aniValue = wisMod;
  if (aniProfIn && aniExpIn) aniValue += (proficiencyVal * 2);
  else if (aniProfIn) aniValue += proficiencyVal;
  document.getElementById('AniHand').textContent = aniValue;

  let insValue = wisMod;
  if (insProfIn && insExpIn) insValue += (proficiencyVal * 2);
  else if (insProfIn) insValue += proficiencyVal;
  document.getElementById('Ins').textContent = insValue;

  let medValue = wisMod;
  if (medProfIn && medExpIn) medValue += (proficiencyVal * 2);
  else if (medProfIn) medValue += proficiencyVal;
  document.getElementById('Med').textContent = medValue;

  let percValue = wisMod;
  if (percProfIn && percExpIn) percValue += (proficiencyVal * 2);
  else if (percProfIn) percValue += proficiencyVal;
  document.getElementById('Per').textContent = percValue;
  document.getElementById("passivePerc").textContent = percValue + 10;

  let surValue = wisMod;
  if (surProfIn && surExpIn) surValue += (proficiencyVal * 2);
  else if (surProfIn) surValue += proficiencyVal;
  document.getElementById('Sur').textContent = surValue;

  // Charisma: Deception, Intimidation, Performance, Persuasion
  let decValue = chaMod;
  if (decProfIn && decExpIn) decValue += (proficiencyVal * 2);
  else if (decProfIn) decValue += proficiencyVal;
  document.getElementById('Decept').textContent = decValue;

  let inValue = chaMod;
  if (inProfIn && inExpIn) inValue += (proficiencyVal * 2);
  else if (inProfIn) inValue += proficiencyVal;
  document.getElementById('Intimi').textContent = inValue;

  let perfValue = chaMod;
  if (perfProfIn && perfExpIn) perfValue += (proficiencyVal * 2);
  else if (perfProfIn) perfValue += proficiencyVal;
  document.getElementById('Perform').textContent = perfValue;

  let persValue = chaMod;
  if (persProfIn && persExpIn) persValue += (proficiencyVal * 2);
  else if (persProfIn) persValue += proficiencyVal;
  document.getElementById('Pers').textContent = persValue;
}

// Weapon table script content
const table = document.getElementById('weapon-table').getElementsByTagName('tbody')[0];

  // Event listener on the table body
table.addEventListener('keydown', function (e) {
  const target = e.target;
  const row = target.closest('tr');

  // Add new row on Enter in last column
  if (e.key === 'Enter' && target.classList.contains('last-col')) {
    e.preventDefault();
    addRow();
  }

  // Delete row on Backspace in first column if row is empty
  if (e.key === 'Backspace' && target.classList.contains('first-col')) {
    if (target.value === '') {
      const inputs = row.querySelectorAll('input[type="text"]');
      const checkboxes = row.querySelectorAll('input[type="checkbox"]');
      const allEmpty = Array.from(inputs).every(input => input.value.trim() === '') &&
                        Array.from(checkboxes).every(checkbox => !checkbox.checked);

      if (allEmpty && table.rows.length > 1) {
        e.preventDefault();
        const prevRow = table.rows[row.rowIndex - 2];
        row.remove();
        if (prevRow) {
          const prevInput = prevRow.querySelector('.first-col');
          if (prevInput) prevInput.focus();
        }
      }
    }
  }
});

function addRow() {
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell();
  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.classList.add('first-col');
  cell1.appendChild(input1);

  const cell2 = newRow.insertCell();
  const input2 = document.createElement('input');
  input2.type = 'text';
  cell2.appendChild(input2);

  const cell3 = newRow.insertCell();
  const input3 = document.createElement('input');
  input3.type = 'text';
  cell3.appendChild(input3);

  const cell4 = newRow.insertCell();
  const input4 = document.createElement('input');
  input4.type = 'checkbox';
  cell4.appendChild(input4);

  const cell5 = newRow.insertCell();
  const input5 = document.createElement('input');
  input5.type = 'text';
  input5.classList.add('last-col');
  cell5.appendChild(input5);

  input1.focus();
}

const spellContainer = document.getElementById('spells');

const cantripsBody = document.getElementById('cantrips-body');
cantripsBody.addEventListener('keydown', (e) => {
  const row = e.target.closest('tr');

  if (e.key === 'Enter' && e.target.classList.contains('last-column')) {
    e.preventDefault();
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.classList.add('spell-name', 'first-column', 'last-column');
    newCell.appendChild(newInput);
    newRow.appendChild(newCell);
    cantripsBody.appendChild(newRow);
    newInput.focus();
  }

  if (e.key === 'Backspace' && e.target.classList.contains('first-column')) {
    if (e.target.value.trim() === '') {
      const inputs = row.querySelectorAll('input');
      const allEmpty = Array.from(inputs).every(i => i.value.trim() === '');
      if (allEmpty && cantripsBody.rows.length > 1) {
        e.preventDefault();
        const prevRow = row.previousElementSibling;
        row.remove();
        if (prevRow) {
          const prevInput = prevRow.querySelector('input');
          if (prevInput) prevInput.focus();
        }
      }
    }
  }
});

const levelNames = {
  1: "1st Level",
  2: "2nd Level",
  3: "3rd Level",
  4: "4th Level",
  5: "5th Level",
  6: "6th Level",
  7: "7th Level",
  8: "8th Level",
  9: "9th Level"
};


document.querySelectorAll('#slots input[type="number"][data-level]').forEach(input => {
    input.addEventListener('input', () => {
      const level = input.dataset.level;
      const value = parseInt(input.value, 10);

      const existingSection = document.querySelector(`#spell-level-${level}`);

      if (value > 0 && !existingSection) {
        addSpellSection(level);
      } else if ((value <= 0 || isNaN(value)) && existingSection) {
        existingSection.remove();
      }
    });
  });

  function addSpellSection(level) {
    const section = document.createElement('div');
    section.className = 'spell-section';
    section.id = `spell-level-${level}`;

    const header = document.createElement('h4');
    header.textContent = levelNames[level];

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Add first row
    const firstRow = document.createElement('tr');
    const cell = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('spell-name', 'first-column', 'last-column');
    cell.appendChild(input);
    firstRow.appendChild(cell);
    tbody.appendChild(firstRow);

    table.appendChild(tbody);
    section.appendChild(header);
    section.appendChild(table);
    spellContainer.appendChild(section);

    // Handle enter and backspace for dynamic row management
    tbody.addEventListener('keydown', (e) => {
      const row = e.target.closest('tr');

      // Add row on Enter
      if (e.key === 'Enter' && e.target.classList.contains('last-column')) {
        e.preventDefault();
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.classList.add('spell-name', 'first-column', 'last-column');
        newCell.appendChild(newInput);
        newRow.appendChild(newCell);
        tbody.appendChild(newRow);
        newInput.focus();
      }

      // Delete row on Backspace in empty first column
      if (e.key === 'Backspace' && e.target.classList.contains('first-column')) {
        if (e.target.value.trim() === '') {
          const inputs = row.querySelectorAll('input');
          const allEmpty = Array.from(inputs).every(i => i.value.trim() === '');
          if (allEmpty && tbody.rows.length > 1) {
            e.preventDefault();
            const prevRow = row.previousElementSibling;
            row.remove();
            if (prevRow) {
              const prevInput = prevRow.querySelector('input');
              if (prevInput) prevInput.focus();
            }
          }
        }
      }
    });
  }


// Add event listener to the input field to detect changes
document.getElementById('STR').addEventListener('input', updateValues);
document.getElementById('DEX').addEventListener('input', updateValues);
document.getElementById('CON').addEventListener('input', updateValues);
document.getElementById('INT').addEventListener('input', updateValues);
document.getElementById('WIS').addEventListener('input', updateValues);
document.getElementById('CHA').addEventListener('input', updateValues);
document.getElementById('LVL').addEventListener('input', updateValues);

document.getElementById('StrProf').addEventListener('input', updateValues);
document.getElementById('DexProf').addEventListener('input', updateValues);
document.getElementById('ConProf').addEventListener('input', updateValues);
document.getElementById('IntProf').addEventListener('input', updateValues);
document.getElementById('WisProf').addEventListener('input', updateValues);
document.getElementById('ChaProf').addEventListener('input', updateValues);

document.getElementById('AthProf').addEventListener('input', updateValues);
document.getElementById('AthExp').addEventListener('input', updateValues);

document.getElementById('AcrProf').addEventListener('input', updateValues);
document.getElementById('AcrExp').addEventListener('input', updateValues);
document.getElementById('SoHProf').addEventListener('input', updateValues);
document.getElementById('SoHExp').addEventListener('input', updateValues);
document.getElementById('SteProf').addEventListener('input', updateValues);
document.getElementById('SteExp').addEventListener('input', updateValues);

document.getElementById('ArcProf').addEventListener('input', updateValues);
document.getElementById('ArcExp').addEventListener('input', updateValues);
document.getElementById('HisProf').addEventListener('input', updateValues);
document.getElementById('HisExp').addEventListener('input', updateValues);
document.getElementById('InvProf').addEventListener('input', updateValues);
document.getElementById('InvExp').addEventListener('input', updateValues);
document.getElementById('NatProf').addEventListener('input', updateValues);
document.getElementById('NatExp').addEventListener('input', updateValues);
document.getElementById('RelProf').addEventListener('input', updateValues);
document.getElementById('RelExp').addEventListener('input', updateValues);

document.getElementById('AniProf').addEventListener('input', updateValues);
document.getElementById('AniExp').addEventListener('input', updateValues);
document.getElementById('InsProf').addEventListener('input', updateValues);
document.getElementById('InsExp').addEventListener('input', updateValues);
document.getElementById('MedProf').addEventListener('input', updateValues);
document.getElementById('MedExp').addEventListener('input', updateValues);
document.getElementById('PercProf').addEventListener('input', updateValues);
document.getElementById('PercExp').addEventListener('input', updateValues);
document.getElementById('SurProf').addEventListener('input', updateValues);
document.getElementById('SurExp').addEventListener('input', updateValues);

document.getElementById('DecProf').addEventListener('input', updateValues);
document.getElementById('DecExp').addEventListener('input', updateValues);
document.getElementById('InProf').addEventListener('input', updateValues);
document.getElementById('InExp').addEventListener('input', updateValues);
document.getElementById('PerfProf').addEventListener('input', updateValues);
document.getElementById('PerfExp').addEventListener('input', updateValues);
document.getElementById('PersProf').addEventListener('input', updateValues);
document.getElementById('PersExp').addEventListener('input', updateValues);


const STORAGE_KEY = 'character_sheets';

const dropdown = document.getElementById('saved-sheets-dropdown');
const saveBtn = document.getElementById('save-btn');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFile = document.getElementById('import-file');
const resetBtn = document.getElementById('reset-btn');
const deleteBtn = document.getElementById('delete-btn');

let currentSheetName = '';

function getSavedSheets() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

function saveToCache(name, data) {
  const all = getSavedSheets();
  all[name] = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  updateDropdown();
  currentSheetName = name;
  dropdown.value = name;
}

function updateDropdown() {
  const all = getSavedSheets();
  dropdown.innerHTML = '<option value="">-- Select Saved Sheet --</option>';
  Object.keys(all).forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
  });
}

function collectData() {
  const data = {
    fields: {},
    cantrips: [],
    spells: {},
    weapons: []
  };

  // Static fields (not part of dynamic spell/cantrip areas)
  document.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.id && !el.closest('#spells') && !el.closest('#cantrips-section')) {
      data.fields[el.id] = el.type === 'checkbox' ? el.checked : el.value;
    }
  });

  // Weapons
  document.querySelectorAll('#weapon-table tbody tr').forEach(tr => {
    const rowData = [];
    tr.querySelectorAll('input').forEach(input => {
      if (input.type === 'checkbox') {
        rowData.push(input.checked);
      } else {
        rowData.push(input.value);
      }
    });
    data.weapons.push(rowData);
  });

  // Cantrips
  document.querySelectorAll('#cantrips-body tr').forEach(tr => {
    const input = tr.querySelector('input');
    if (input) data.cantrips.push(input.value);
  });

  // Spells by level
  document.querySelectorAll('.spell-section').forEach(section => {
    const sectionId = section.id;
    if (sectionId === 'cantrips-section') return;
    const level = sectionId.replace('spell-level-', '');
    data.spells[level] = [];

    section.querySelectorAll('tbody tr').forEach(tr => {
      const input = tr.querySelector('input');
      if (input) data.spells[level].push(input.value);
    });
  });

  return data;
}

function populateData(data) {
  // Restore static fields
  if (data.fields) {
    Object.entries(data.fields).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) {
        if (el.type === 'checkbox') {
          el.checked = value;
        } else {
          el.value = value;
        }
      }
    });
  }

  // Restore weapons table
  if (Array.isArray(data.weapons)) {
    const tbody = document.querySelector('#weapon-table tbody');
    tbody.innerHTML = ''; // Clear existing rows

    data.weapons.forEach(row => {
      const tr = document.createElement('tr');

      row.forEach((cellValue, i) => {
        const td = document.createElement('td');
        const input = document.createElement('input');

        // Column 3 is a checkbox (index 3)
        if (i === 3) {
          input.type = 'checkbox';
          input.checked = !!cellValue;
        } else {
          input.type = 'text';
          input.value = cellValue;
        }

        td.appendChild(input);
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  }

  // Restore Cantrips
  if (Array.isArray(data.cantrips)) {
    const tbody = document.getElementById('cantrips-body');
    tbody.innerHTML = '';
    data.cantrips.forEach(val => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('spell-name', 'first-column', 'last-column');
      input.value = val;
      td.appendChild(input);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
  }

  // Restore Spells
  if (data.spells) {
    Object.entries(data.spells).forEach(([level, spells]) => {
      let section = document.getElementById(`spell-level-${level}`);
      if (!section) {
        addSpellSection(level);
        section = document.getElementById(`spell-level-${level}`);
      }

      const tbody = section.querySelector('tbody');
      tbody.innerHTML = '';
      spells.forEach(val => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('spell-name', 'first-column', 'last-column');
        input.value = val;
        td.appendChild(input);
        tr.appendChild(td);
        tbody.appendChild(tr);
      });
    });
  }
  updateValues()
}

function clearData() {
  document.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.type === 'checkbox') {
      el.checked = false;
    } else {
      el.value = '';
    }
  });

  const cantripsBody = document.getElementById('cantrips-body');
  cantripsBody.innerHTML = '';
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('spell-name', 'first-column', 'last-column');
  td.appendChild(input);
  tr.appendChild(td);
  cantripsBody.appendChild(tr);

  document.querySelectorAll('.spell-section').forEach(section => {
    if (section.id !== 'cantrips-section') section.remove();
  });

  dropdown.value = '';
  currentSheetName = '';
}

// Button Event Listeners

saveBtn.addEventListener('click', () => {
  const name = prompt('Enter a name for this sheet:', currentSheetName || '');
  if (!name) return;
  const data = collectData();
  saveToCache(name, data);
  alert(`Saved "${name}" to localStorage.`);
});

exportBtn.addEventListener('click', () => {
  const data = collectData();
  const filename = (currentSheetName || 'character-sheet') + '.json';
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
});

importBtn.addEventListener('click', () => {
  importFile.click();
});

importFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      const name = prompt('Enter a name to save this imported sheet:');
      if (name) {
        saveToCache(name, data);
        populateData(data);
        alert(`Imported and loaded "${name}"`);
      }
    } catch (err) {
      alert('Invalid JSON file.');
    }
  };
  reader.readAsText(file);
});

function updateDeleteButton() {
  deleteBtn.disabled = !currentSheetName;
}

dropdown.addEventListener('change', () => {
  const name = dropdown.value;
  if (!name) {
    currentSheetName = '';
    clearData();  // Or whatever makes sense on "no selection"
  } else {
    const all = getSavedSheets();
    const data = all[name];
    if (data) {
      populateData(data);
      currentSheetName = name;
    }
  }
  updateDeleteButton();
});

resetBtn.addEventListener('click', () => {
  if (confirm('This will clear all fields. Continue?')) {
    clearData();
    // Keep currentSheetName because you might want to overwrite it
    updateDeleteButton();
  }
});

deleteBtn.addEventListener('click', () => {
  if (!currentSheetName) {
    alert('Please select a sheet to delete.');
    return;
  }
  if (confirm(`Are you sure you want to delete "${currentSheetName}"?`)) {
    const all = getSavedSheets();
    delete all[currentSheetName];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    updateDropdown();
    currentSheetName = '';
    dropdown.value = '';
    clearData();
    updateDeleteButton();
    alert(`Deleted "${currentSheetName}"`);
    updateValues();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  updateDropdown();
  updateDeleteButton();
  updateValues();
});


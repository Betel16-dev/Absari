function LanguageSelector() {
  return (
    <label>
      Language
      <select defaultValue="en">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </label>
  );
}

export default LanguageSelector;

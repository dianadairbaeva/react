import { useSelector, useDispatch } from "react-redux";
import {
    setTheme,
    setLanguage,
    toggleNotifications
} from "../store/settingsSlice";
import { useEffect } from "react";
import "./SettingsPanel.css";

export default function SettingsPanel() {

    const dispatch = useDispatch();

    const settings = useSelector(
        state => state.settings
    );

    useEffect(() => {
        localStorage.setItem(
            "settings",
            JSON.stringify(settings)
        );
    }, [settings]);

    return (

        <div
            className={
                settings.theme === "Темная"
                    ? "panel dark"
                    : "panel"
            }
        >

            <h1>Панель настроек пользователя</h1>

            <div className="card">

                <h3>Текущие настройки</h3>

                <p>
                    <b>Тема:</b> {settings.theme}
                </p>

                <p>
                    <b>Язык:</b> {settings.language}
                </p>

                <p>
                    <b>Уведомления:</b>{" "}
                    {settings.notificationsEnabled
                        ? "Включены"
                        : "Выключены"}
                </p>

            </div>

            <button
                onClick={() => dispatch(setTheme("Светлая"))}>
                🌞 Светлая тема
            </button>

            <button
                onClick={() => dispatch(setTheme("Темная"))}>
                🌙 Темная тема
            </button>

            <button
                onClick={() => dispatch(setLanguage("Русский"))}>
                🇷🇺 Русский
            </button>

            <button
                onClick={() => dispatch(setLanguage("English"))}>
                🇺🇸 English
            </button>

            <button
                onClick={() => dispatch(toggleNotifications())}>
                🔔 Вкл / Выкл уведомления
            </button>

        </div>

    );
}
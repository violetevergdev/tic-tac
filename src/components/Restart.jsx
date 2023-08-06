/** @format */

export const Restart = (props) => {
  if (props.winner) {
    return (
      <div>
        <button
          className="btn"
          onClick={() => {
            window.location.reload(true);
          }}
        >
          Заново
        </button>
      </div>
    );
  }
};

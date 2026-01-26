import worksDashboardImage from '../../assets/works-dashboards.png'
import classes from './WorkCard.module.css'

type WorkCardProps = {
    title: string,
    year: number
}

export default function WorkCard({ title, year }: WorkCardProps) {
    return (
      <article className={classes.card}>
        <img className={classes.image} src={worksDashboardImage} alt="work image" />
        <div>
          <h3>{title}</h3>
          <section>
            <span>{String(year)}</span>
            <span>Dashboard</span>
          </section>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </article>
    )
  }